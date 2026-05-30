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
      <img :src="project.heroImage || `/${project.id}.png`" :alt="project.title" />
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

    <section class="my-role" v-if="project.myRoleItems">
      <div class="features-header">
        <p class="label">MY CONTRIBUTION</p>
        <h2>My <em>Role</em></h2>
        <p class="features-subtitle">{{ project.myRoleIntro }}</p>
      </div>

      <div class="role-grid">
        <div class="role-card" v-for="(item, index) in project.myRoleItems" :key="index">
          <span class="role-number">0{{ index + 1 }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

      <div class="role-outcome" v-if="project.myRoleOutcome">
        <p class="outcome-text">⭐ {{ project.myRoleOutcome }}</p>
      </div>
    </section>

    <section class="research" v-if="project.researchIntro">
      <div class="features-header">
        <p class="label">DISCOVERY</p>
        <h2>Discovery & <em>User Research</em></h2>
        <p class="features-subtitle">{{ project.researchIntro }}</p>
      </div>

      <div class="research-content">
        <div class="research-findings">
          <p class="block-label">WHAT USERS TOLD US</p>
          <div class="findings-grid">
            <div class="finding-card" v-for="(finding, index) in project.researchFindings" :key="index">
              <h3>{{ finding.title }}</h3>
              <p>{{ finding.description }}</p>
            </div>
          </div>
        </div>

        <div class="research-insights">
          <p class="block-label">WHAT THE CLIENT NEEDED</p>
          <ul>
            <li v-for="(insight, index) in project.researchInsights" :key="index">{{ insight }}</li>
          </ul>
        </div>
      </div>

      <div class="research-image" v-if="project.researchImage">
        <img :src="project.researchImage" alt="Research sticky notes" />
      </div>
    </section>

    <section class="prototyping" v-if="project.interventions">
      <div class="features-header">
        <p class="label">IDEATION</p>
        <h2>Ideation & <em>Prototyping</em></h2>
        <p class="features-subtitle">{{ project.prototypingIntro }}</p>
      </div>

      <p class="block-label" style="max-width:1000px; margin: 0 auto 1.5rem auto;">KEY DESIGN INTERVENTIONS</p>
      <div class="interventions-grid">
        <div class="intervention-card" v-for="(item, index) in project.interventions" :key="index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>

      <div class="before-after" v-if="project.beforeImage">
        <p class="label" style="max-width:1000px; margin: 3rem auto 1.5rem auto;">BEFORE & AFTER</p>
        <div class="before-after-grid">
          <div>
            <p class="ba-label">BEFORE — CZ CLINIC INFORMATION</p>
            <img :src="project.beforeImage" alt="Before redesign" />
          </div>
          <div>
            <p class="ba-label">AFTER — THE REDESIGN</p>
            <img :src="project.afterImage" alt="After redesign" />
          </div>
        </div>
      </div>
    </section>

    <section class="final-design" v-if="project.finalImage">
      <div class="features-header">
        <p class="label">FINAL DESIGN</p>
        <h2>The <em>Redesign</em></h2>
      </div>
      <div class="final-image">
        <img :src="project.finalImage" alt="Final redesign" />
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

    <section class="the-design" v-if="project.designScreenshots">
      <div class="features-header">
        <p class="label">FIGMA</p>
        <h2>{{ project.designTitle }} <em>{{ project.designTitleItalic }}</em></h2>
        <p class="features-subtitle">{{ project.designIntro }}</p>
      </div>

      <div class="design-screenshots">
        <div
          class="design-screenshot-item"
          v-for="(screenshot, index) in project.designScreenshots"
          :key="index"
        >
          <img :src="screenshot.image" :alt="screenshot.caption" />
          <p class="screenshot-caption">{{ screenshot.caption }}</p>
        </div>
      </div>
    </section>

    <section class="iteration" v-if="project.iterations">
      <div class="features-header">
        <p class="label">USER TESTING</p>
        <h2>User Testing & <em>Iteration</em></h2>
        <p class="features-subtitle">{{ project.iterationIntro }}</p>
      </div>

    <p class="label" style="max-width:700px; margin: 0 auto 1.5rem auto;">HOW FEEDBACK CHANGED THE DESIGN</p>
      <div class="iteration-list">
      <div class="iteration-item" v-for="(item, index) in project.iterations" :key="index">
        <div class="iteration-icon">★</div>
        <div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <img v-if="item.image" :src="item.image" :alt="item.title" class="iteration-image" />
        </div>
      </div>
      </div>
    </section>

    <section class="animations" v-if="project.animations">
      <div class="features-header">
        <p class="label">ANIMATIONS</p>
        <h2>{{ project.animationsTitle }} <em>{{ project.animationsTitleItalic }}</em></h2>
        <p class="features-subtitle">{{ project.animationsIntro }}</p>
      </div>

      <div class="carousel">
        <button class="carousel-btn prev" @click="prevAnimation">‹</button>

        <div
          class="carousel-content"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEndAnim"
        >
          <div class="carousel-video">
            <video
              :src="project.animations[currentAnimation].video"
              autoplay muted loop playsinline
            ></video>
          </div>
          <div class="carousel-info">
            <h3>{{ project.animations[currentAnimation].title }}</h3>
            <p>{{ project.animations[currentAnimation].description }}</p>
            <div class="carousel-dots">
              <span
                v-for="(anim, index) in project.animations"
                :key="index"
                :class="['dot', { active: index === currentAnimation }]"
                @click="currentAnimation = index"
              ></span>
            </div>
          </div>
        </div>

        <button class="carousel-btn next" @click="nextAnimation">›</button>
      </div>
    </section>

    <section class="design-highlights" v-if="project.designHighlights">
      <div class="features-header">
        <p class="label">DESIGN HIGHLIGHTS</p>
        <h2>Logo's & <em>Stylescapes</em></h2>
      </div>

      <div class="solution-cards" v-if="project.solutionCards">
        <div class="solution-card" v-for="(card, index) in project.solutionCards" :key="index">
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>

      <div class="highlights-block">
        <p class="block-label">STYLESCAPES</p>
        <div class="stylescapes">
          <img src="/dp-stylescape-1.png" alt="Stylescape 1" />
          <img src="/dp-stylescape-2.png" alt="Stylescape 2" />
        </div>
      </div>

      <div class="highlights-block">
        <p class="block-label">LOGO CONCEPTS</p>
        <div class="logos">
          <div class="logo-card">
            <img src="/dp-logo-1.png" alt="Logo concept 1" />
          </div>
          <div class="logo-card">
            <img src="/dp-logo-2.png" alt="Logo concept 2" />
          </div>
        </div>
      </div>
    </section>

    <section class="vinyl-interaction" v-if="project.interactionVideo">
      <div class="vinyl-text">
        <p class="label">THE INTERACTION</p>
        <h2>{{ project.interactionTitle }} <em>{{ project.interactionTitleItalic }}</em></h2>
        <p>{{ project.interactionDescription }}</p>
      </div>
      <div class="vinyl-video">
        <video :src="project.interactionVideo" autoplay muted loop playsinline></video>
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
const currentAnimation = ref(0)

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

function nextAnimation() {
  if (project.value && project.value.animations) {
    currentAnimation.value = (currentAnimation.value + 1) % project.value.animations.length
  }
}

function prevAnimation() {
  if (project.value && project.value.animations) {
    currentAnimation.value = (currentAnimation.value - 1 + project.value.animations.length) % project.value.animations.length
  }
}

let touchStartX = 0

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX
}

function handleTouchEnd(e) {
  const touchEndX = e.changedTouches[0].clientX
  const diff = touchStartX - touchEndX
  if (diff > 50) nextSlide()
  else if (diff < -50) prevSlide()
}

function handleTouchEndAnim(e) {
  const touchEndX = e.changedTouches[0].clientX
  const diff = touchStartX - touchEndX
  if (diff > 50) nextAnimation()
  else if (diff < -50) prevAnimation()
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
  border-radius: 16px;
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
  background-color: #dbe9ff;  
  border-radius: 16px;
  padding: 2rem;
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

.design-highlights {
  padding: 6rem 8rem;
  background-color: #f7f9ff;
  border-top: 1px solid #e8e8e8;
}

.stylescapes {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 3rem auto;
}

.stylescapes img {
  width: 100%;
  border-radius: 12px;
}

.logos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.logo-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
}

.logo-card img {
  width: 100%;
  max-width: 280px;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .design-highlights { padding: 3rem 2rem; }
  .logos { grid-template-columns: 1fr; }
}


.vinyl-interaction {
  padding: 6rem 8rem;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
}

.vinyl-interaction-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
}

.vinyl-text {
  max-width: 900px;
  margin: 0 auto 2rem auto;
}

.vinyl-text p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
}

.vinyl-video {
  max-width: 900px;
  margin: 0 auto;
}

.vinyl-video video {
  width: 100%;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .design-highlights { padding: 3rem 2rem; }
  .highlights-grid { grid-template-columns: 1fr; }
  .vinyl-interaction {
    flex-direction: column;
    padding: 3rem 2rem;
  }
}

.highlights-block {
  max-width: 1000px;
  margin: 0 auto 3rem auto;
}

.block-label {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #1a1a2e;
  margin-bottom: 1rem;
}

.solution-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 700px;
  width: 100%;
  margin: 1.5rem auto 0 auto;
}

.solution-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e8e8e8;
  text-align: center;
}

.solution-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1rem;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
}

.solution-card p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
}

.research {
  padding: 6rem 8rem;
  background-color: #f7f9ff;
  border-top: 1px solid #e8e8e8;
}

.research-content {
  max-width: 1000px;
  margin: 0 auto 3rem auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.before-after-grid img {
  width: 100%;
  border-radius: 8px;
}

.before-after {
  max-width: 700px;
  margin: 0 auto;
}

.research-findings {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.findings-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

.finding-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  border: 1px solid #e8e8e8;
  margin-bottom: 1rem;
}

.finding-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1rem;
  color: #1a1a2e;
  margin-bottom: 0.4rem;
}

.finding-card p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

.research-insights ul {
  list-style: none;
  padding: 0;
}

.research-insights ul li {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e8e8e8;
}

.research-image {
  max-width: 1000px;
  margin: 0 auto;
}

.research-image img {
  width: 100%;
  border-radius: 12px;
}

.prototyping {
  padding: 6rem 8rem;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
}

.interventions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 3rem auto;
}

.intervention-card {
  background-color: #f7f9ff;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e8e8e8;
  text-align: center;
}

.intervention-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.2rem;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
}

.intervention-card p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
}

.ba-label {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #1a1a2e;
  margin-bottom: 1rem;
}

.iteration {
  padding: 6rem 8rem;
  background-color: #f7f9ff;
  border-top: 1px solid #e8e8e8;
  border-bottom: none;
}

.iteration-list {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.iteration-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.iteration-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  color: #e07a7a;
}

.iteration-item h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.1rem;
  color: #1a1a2e;
  margin-bottom: 0.4rem;
}

.iteration-item p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
}

.iteration-image {
  width: 100%;
  border-radius: 12px;
  margin-top: 1.5rem;
}

.final-design {
  padding: 6rem 8rem;
  background-color: #f7f9ff;
}


.final-image {
  max-width: 1000px;
  margin: 0 auto;
}

.final-image img {
  width: 100%;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .research { padding: 3rem 2rem; }
  .research-content { grid-template-columns: 1fr; }
  .prototyping { padding: 3rem 2rem; }
  .interventions-grid { grid-template-columns: 1fr; }
  .before-after-grid { grid-template-columns: 1fr; }
  .iteration { padding: 3rem 2rem; }
  .final-design { padding: 3rem 2rem; }
}

.my-role {
  padding: 6rem 8rem;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
}

.role-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 2.5rem auto;
}

.role-card {
  background-color: #f7f9ff;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid #e8e8e8;
}

.role-number {
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  color: #e07a7a;
  display: block;
  margin-bottom: 0.75rem;
  line-height: 1;
}

.role-card h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 1.2rem;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.role-card p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
}

.role-outcome {
  max-width: 1000px;
  margin: 0 auto;
  background-color: #dbe9ff;
  border-radius: 12px;
  padding: 1.25rem 2rem;
  text-align: center;
}

.outcome-text {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0;
}

.the-design {
  padding: 6rem 8rem;
  background-color: #f7f9ff;
  border-top: 1px solid #e8e8e8;
}

.design-screenshots {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.design-screenshot-item img {
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e8e8e8;
}

.screenshot-caption {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.85rem;
  color: #888;
  margin-top: 0.75rem;
  text-align: center;
}

.animations {
  padding: 6rem 8rem;
  background-color: #fff;
  border-top: 1px solid #e8e8e8;
}

@media (max-width: 768px) {
  .my-role { padding: 3rem 2rem; }
  .role-grid { grid-template-columns: 1fr; }
  .the-design { padding: 3rem 2rem; }
  .animations { padding: 3rem 2rem; }
}

</style>