<template>
  <section class="contact" id="contact">
    <p class="label">CONTACT</p>
    <h2>Let's <em>Connect!</em></h2>
    <p class="subtitle">Interested in working together or just want to say hi? Feel free to reach out!</p>

    <div class="flip-container">
      <div class="flipper">
        <div class="front">
          <span>Contact</span>
        </div>
        <div class="back">
         <a href="https://www.linkedin.com/in/paulien-ma-00a720402/" target="_blank" class="social-link">in</a>
          <a href="mailto:paulienma1@gmail.com" class="social-link">✉</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 8rem;
  background-color: #dbe9ff;
  text-align: center;
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
  font-size: 3.5rem;
  color: #1a1a2e;
  margin-bottom: 1rem;
}

h2 em {
  color: #e07a7a;
  font-style: italic;
}

.subtitle {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2.5rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
}

.flip-container {
  display: inline-block;
  perspective: 1000px;
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
  background-color: #1A2D55;
  color: white;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  font-weight: 600;
}

.back {
  background-color: #1A2D55;
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
  border-color: #e07a7a;
}

@media (max-width: 768px) {
  .contact {
    padding: 4rem 2rem;
  }

  h2 {
    font-size: 2.75rem;
  }
}
</style>