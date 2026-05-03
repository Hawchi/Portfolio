<template>
  <section class="hero">
    <div class="hero-text">
      <p class="category">UX/UI Design & Web Development</p>
      <h1>Hi, I'm</h1>
      <h1 class="name">Paulien Ma</h1>
      <p class="bio">Second-year ICT student at Fontys, I turn creativity into websites and digital designs.</p>
      <div class="buttons">
        <button class="btn-primary" @click="scrollTo('projects')">View Projects</button>

        <div class="flip-container">
          <div class="flipper">
            <div class="front"><span>Contact Me</span></div>
            <div class="back">
              <a href="https://www.linkedin.com/in/paulien-ma-00a720402/" target="_blank" class="social-link">in</a>
              <a href="mailto:paulienma1@gmail.com" class="social-link">✉</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-image">
      <img src="/Otter.gif" alt="Swimming otters" />
    </div>
  </section>
</template>

<script setup>
function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8rem;
  background-color: #dbe9ff;
  min-height: 90vh;
  gap: 2rem;
}

.hero-text {
  max-width: 580px;
  flex: 1;
}

.category {
  color: #e07a7a;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

h1 {
  font-family: 'DM Serif Display', serif;
  font-size: 5.5rem;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.05;
}

.name {
  color: #e07a7a;
  font-style: italic;
}

.bio {
  margin-top: 1.5rem;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1.1rem;
  color: #555;
  max-width: 440px;
  line-height: 1.7;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  align-items: center;
}

.btn-primary {
  background-color: #1a1a2e;
  color: white;
  padding: 0.55rem 1.75rem;
  border-radius: 50px;
  border: none;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  height: 38px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #e07a7a;
}

.flip-container {
  display: inline-block;
  perspective: 1000px;
}

.flipper {
  position: relative;
  width: 160px;
  height: 38px;
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
  background-color: #e07a7a;
  color: white;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  border: none;
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
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
}

.social-link:hover {
  background-color: #e07a7a;
  border-color: #e07a7a;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  width: 100%;
  max-width: 480px;
  height: auto;
}

@media (max-width: 1024px) {
  .hero { padding: 4rem 3rem; }
  h1 { font-size: 4rem; }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    padding: 4rem 2rem;
    text-align: center;
    min-height: auto;
  }
  h1 { font-size: 3rem; }
  .bio { max-width: 100%; }
  .buttons { justify-content: center; }
  .hero-image img { max-width: 280px; }
}
</style>