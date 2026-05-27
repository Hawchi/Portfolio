<template>
  <div class="project-page" v-if="project">

    <section class="project-hero">
      <div class="project-hero-text">
        <button @click="goBack" class="back-btn">← Back</button>
        <p class="category">{{ project.category }}</p>
        <h1>{{ project.title }}</h1>
        <p class="description">{{ project.shortDescription }}</p>

        <div class="meta">
          <div class="meta-item">
            <span class="meta-label">ROLE</span>
            <span class="meta-value">{{ project.role }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">TIMELINE</span>
            <span class="meta-value">{{ project.timeline }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">TOOLS</span>
            <span class="meta-value">{{ project.tools }}</span>
          </div>
        </div>

        <div class="buttons" v-if="project.liveUrl || project.repoUrl">
          <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="btn-primary">View Live</a>
          <a v-if="project.repoUrl" :href="project.repoUrl" target="_blank" class="btn-secondary">View Repository</a>
        </div>
      </div>

      <div class="project-hero-image">
        <img :src="`/${project.id}.png`" :alt="project.title" />
      </div>
    </section>

    <section class="problem-solution">
      <div class="block">
        <p class="label">THE PROBLEM</p>
        <h2>{{ project.problemTitle }} <em>{{ project.problemTitleItalic }}</em></h2>
        <p>{{ project.problem }}</p>
      </div>

      <hr class="divider" />

      <div class="block">
        <p class="label">THE SOLUTION</p>
        <h2>{{ project.solutionTitle }} <em>{{ project.solutionTitleItalic }}</em></h2>
        <p>{{ project.solution }}</p>
        <p v-if="project.solutionExtra" class="extra">{{ project.solutionExtra }}</p>
      </div>

      <div class="showcase-video" v-if="project.homepageVideo">
        <video :src="project.homepageVideo" autoplay muted loop playsinline></video>
      </div>
    </section>

    <section class="features" v-if="project.features">
      <div class="features-header">
        <p class="label">DYNAMIC LANDING EXPERIENCES</p>
        <h2>{{ project.featuresTitle }} <em>{{ project.featuresTitleItalic }}</em></h2>
        <p class="features-subtitle">{{ project.featuresSubtitle }}</p>
      </div>

      <div class="carousel">
        <button class="carousel-btn prev" @click="prevSlide">‹</button>

        <div
          class="carousel-content"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <div class="carousel-video">
            <video :src="project.features[currentSlide].video" autoplay muted loop playsinline></video>
          </div>
          <div class="carousel-info">
            <h3>{{ project.features[currentSlide].title }}</h3>
            <p>{{ project.features[currentSlide].description }}</p>
            <div class="carousel-dots">
              <span
                v-for="(feature, index) in project.features"
                :key="index"
                :class="['dot', { active: index === currentSlide }]"
                @click="currentSlide = index"
              ></span>
            </div>
          </div>
        </div>

        <button class="carousel-btn next" @click="nextSlide">›</button>
      </div>
    </section>

    <section class="back-top">
      <button @click="scrollToTop" class="btn-primary">Back To Top</button>
    </section>

    <ContactSection />
  </div>

  <div class="not-found" v-else>
    <h2>Project niet gevonden</h2>
    <button @click="goBack" class="btn-primary">← Terug</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { projects } from '../data/projects.js'
import ContactSection from '../components/ContactSection.vue'

const route = useRoute()
const router = useRouter()
const currentSlide = ref(0)

const project = computed(() => {
  return projects.find(p => p.id === route.params.id)
})

function goBack() {
  router.push('/')
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function nextSlide() {
  if (project.value && project.value.features) {
    currentSlide.value = (currentSlide.value + 1) % project.value.features.length
  }
}

function prevSlide() {
  if (project.value && project.value.features) {
    currentSlide.value = (currentSlide.value - 1 + project.value.features.length) % project.value.features.length
  }
}

let touchStartX = 0

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX
}

function handleTouchEnd(e) {
  const touchEndX = e.changedTouches[0].clientX
  const diff = touchStartX - touchEndX

  if (diff > 50) {
    nextSlide()
  } else if (diff < -50) {
    prevSlide()
  }
}
</script>

<style scoped>
.project-hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;
  background-color: #dbe9ff;
  gap: 4rem;
}

.back-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a2e;
  padding: 0;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;
}

.back-btn:hover {
  color: #e07a7a;
}

.category {
  color: #e07a7a;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

h1 {
  font-family: 'DM Serif Display', serif;
  font-size: 3.5rem;
  color: #1a1a2e;
  line-height: 1.1;
  margin-bottom: 1rem;
}

.description {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  max-width: 480px;
  margin-bottom: 1.5rem;
}

.meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  border-top: 1px solid #c5d8f5;
  padding-top: 1.5rem;
}

.meta-item {
  display: flex;
  gap: 1rem;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
}

.meta-label {
  font-weight: 700;
  color: #1a1a2e;
  min-width: 80px;
}

.meta-value {
  color: #555;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a2e;
  color: white;
  padding: 0.55rem 1.75rem;
  border-radius: 50px;
  text-decoration: none;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #e07a7a;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #1a1a2e;
  padding: 0.55rem 1.75rem;
  border-radius: 50px;
  text-decoration: none;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border: 2px solid #1a1a2e;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: #1a1a2e;
  color: white;
}

.project-hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.project-hero-image img {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 12px;
}

.problem-solution {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 6rem 8rem;
  background-color: #fff;
  align-items: center;
}

.block {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
}

.block p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
}

.extra {
  margin-top: 1.5rem;
}

.divider {
  width: 100%;
  max-width: 700px;
  border: none;
  border-top: 1px solid #e8e8e8;
}

.showcase-video {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.showcase-video video {
  width: 100%;
  border-radius: 12px;
}

.label {
  color: #e07a7a;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
  line-height: 1.2;
}

h2 em {
  color: #e07a7a;
  font-style: italic;
}

.features {
  padding: 6rem 8rem;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
}

.features-header {
  max-width: 700px;
  margin: 0 auto 3rem auto;
  text-align: left;
}

.features-subtitle {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  max-width: 600px;
}

.carousel {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel-btn {
  background: none;
  border: 2px solid #1a1a2e;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a2e;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.carousel-btn:hover {
  background-color: #1a1a2e;
  color: white;
}

.carousel-content {
  display: flex;
  gap: 3rem;
  align-items: center;
  flex: 1;
  background-color: #dbe9ff;
  border-radius: 16px;
  padding: 2rem;
}

.carousel-video {
  flex: 1;
}

.carousel-video video {
  width: 100%;
  border-radius: 12px;
}

.carousel-info {
  flex: 1;
  text-align: left;
}

.carousel-info h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
}

.carousel-info p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
}

.carousel-dots {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #c5d8f5;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.dot.active {
  background-color: #e07a7a;
}

.back-top {
  padding: 3rem 8rem;
  background-color: #fff;
  text-align: center;
  border-top: 1px solid #e8e8e8;
}

.not-found {
  padding: 6rem 8rem;
  text-align: center;
}

@media (max-width: 1024px) {
  .project-hero { padding: 4rem 3rem; }
  .problem-solution { padding: 4rem 3rem; }
  .features { padding: 4rem 3rem; }
}

@media (max-width: 768px) {
  .project-hero {
    flex-direction: column;
    padding: 3rem 2rem;
  }
  h1 { font-size: 2.5rem; }
  .problem-solution { padding: 3rem 2rem; }
  .features { padding: 3rem 2rem; }
  .carousel {
    flex-direction: column;
  }
  .carousel-content {
    flex-direction: column;
  }
  .carousel-btn {
    display: none;
  }
  .carousel-dots {
    justify-content: center;
  }
}
</style>