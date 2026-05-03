<template>
  <section class="about" id="about">
    <div class="about-text">
      <p class="label">ABOUT ME</p>
      <h2 class="title-wrapper">
        <span class="typed-before">{{ beforeDesigner }}</span><em class="designer-word" v-if="showDesigner">{{ designerText }}</em><span class="typed-after">{{ afterDesigner }}</span><span class="cursor" :class="{ hidden: isDone }">|</span>
        <span v-if="isDone" class="sparkle s1">✦</span>
        <span v-if="isDone" class="sparkle s2">✦</span>
        <span v-if="isDone" class="sparkle s3">✦</span>
      </h2>
      <p class="bio">Hello! My name is Paulien Ma and I am a second-year HBO student at Fontys, where I study Information and Communication Technology.</p>
      <p class="bio">I have always been creative and enjoyed drawing and designing. During my studies, I discovered that I could use this creativity to create websites and digital designs.</p>
      <p class="bio">I enjoy bringing my ideas to life through design. What I like most is the design process, as well as turning my designs into working websites through coding.</p>

      <div class="flip-container">
        <div class="flipper">
          <div class="front"><span>Let's Connect</span></div>
          <div class="back">
            <a href="https://www.linkedin.com/in/paulien-ma-00a720402/" target="_blank" class="social-link">in</a>
            <a href="mailto:paulienma1@gmail.com" class="social-link">✉</a>
          </div>
        </div>
      </div>
    </div>

    <div class="about-image">
      <img src="/about-photo.png" alt="Drawing of a girl" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const fullText = 'Creative designer\n& developer'
const designerStart = fullText.indexOf('designer')
const designerEnd = designerStart + 'designer'.length

const displayedText = ref('')
const isDone = ref(false)
let charIndex = 0
let timeout = null

const beforeDesigner = computed(() => {
  return displayedText.value.slice(0, Math.min(charIndex, designerStart))
})

const showDesigner = computed(() => {
  return displayedText.value.length > designerStart
})

const designerText = computed(() => {
  if (!showDesigner.value) return ''
  return displayedText.value.slice(designerStart, Math.min(displayedText.value.length, designerEnd))
})

const afterDesigner = computed(() => {
  if (displayedText.value.length <= designerEnd) return ''
  return displayedText.value.slice(designerEnd)
})

function type() {
  if (charIndex < fullText.length) {
    displayedText.value = fullText.slice(0, charIndex + 1)
    charIndex++
    timeout = setTimeout(type, 80)
  } else {
    isDone.value = true
  }
}

onMounted(() => {
  timeout = setTimeout(type, 600)
})

onUnmounted(() => {
  clearTimeout(timeout)
})
</script>

<style scoped>
.about {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 8rem;
  background-color: #fff;
  gap: 4rem;
}

.label {
  color: #e07a7a;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
}

h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 3.5rem;
  color: #1a1a2e;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  white-space: pre-line;
}

.title-wrapper {
  position: relative;
  display: inline-block;
}

.cursor {
  font-family: 'DM Serif Display', serif;
  font-size: 3.5rem;
  color: #1a1a2e;
  animation: blink 0.7s infinite;
}

.cursor.hidden {
  display: none;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.sparkle {
  position: absolute;
  color: #e07a7a;
  font-size: 1.2rem;
  pointer-events: none;
  animation: sparkleAnim 1.5s ease-in-out infinite;
}

.designer-word {
  color: #e07a7a;
  font-style: italic;
  font-family: 'DM Serif Display', serif;
  font-size: 3.5rem;
  transition: color 0.3s ease, font-style 0.3s ease;
}

.s1 { top: -10px; right: -20px; animation-delay: 0s; }
.s2 { top: 10px; right: -35px; animation-delay: 0.5s; font-size: 0.8rem; }
.s3 { top: -5px; right: -48px; animation-delay: 1s; font-size: 1rem; }

@keyframes sparkleAnim {
  0%   { opacity: 0; transform: scale(0) rotate(0deg); }
  40%  { opacity: 1; transform: scale(1.3) rotate(20deg); }
  70%  { opacity: 1; transform: scale(1) rotate(10deg); }
  100% { opacity: 0; transform: scale(0) rotate(40deg); }
}

.bio {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 1rem;
  max-width: 480px;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about-image img {
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
}

.flip-container {
  display: inline-block;
  perspective: 1000px;
  margin-top: 1rem;
}

.flipper {
  position: relative;
  width: 160px;
  height: 44px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

.flip-container:hover .flipper {
  transform: rotateX(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.front {
  background-color: #1a1a2e;
  color: white;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  font-weight: 600;
}

.back {
  background-color: #1a1a2e;
  transform: rotateX(180deg);
  gap: 1.5rem;
}

.social-link {
  color: white;
  text-decoration: none;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.social-link:hover {
  background-color: #e07a7a;
}

@media (max-width: 1024px) {
  .about {
    padding: 4rem 3rem;
  }
  h2, .cursor {
    font-size: 2.75rem;
  }
}

@media (max-width: 768px) {
  .about {
    flex-direction: column-reverse;
    padding: 4rem 2rem;
    text-align: center;
  }
  .bio {
    max-width: 100%;
  }
  .about-image img {
    max-width: 280px;
  }
}
</style>