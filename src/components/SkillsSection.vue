<template>
  <section class="skills" id="skills">
    <h2>My <em>Skills</em></h2>

    <div class="skills-grid">
      <div class="skill-card">
        <h3>UX/UI Design</h3>
        <p>I design user-friendly interfaces with a focus on aesthetics and clarity.</p>
        <div class="tags">
          <span class="tag">Figma</span>
          <span class="tag">Prototyping</span>
          <span class="tag">Wireframing</span>
        </div>
      </div>

      <div class="skill-card">
        <h3>Frontend Development</h3>
        <p>I build responsive and interactive websites that are both functional and visually appealing.</p>
        <div class="tags">
          <span class="tag">HTML</span>
          <span class="tag">CSS</span>
          <span class="tag">JavaScript</span>
          <span class="tag">Vue.js</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 6rem 8rem;
  background-color: #dbe9ff;
  text-align: center;
}

h2 {
  font-family: 'DM Serif Display', serif;
  font-size: 3.5rem;
  color: #1a1a2e;
  margin-bottom: 3rem;
}

h2 em {
  color: #e07a7a;
  font-style: italic;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.skill-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 2rem;
  text-align: left;
}

h3 {
  font-family: 'Baloo Bhai', sans-serif;
  font-size: 1.4rem;
  font-weight: 100;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
}

p {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background-color: #dbe9ff;
  color: #1a1a2e;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.3rem 0.9rem;
  border-radius: 50px;
}

@media (max-width: 1024px) {
  .skills {
    padding: 4rem 3rem;
  }
}

@media (max-width: 768px) {
  .skills {
    padding: 4rem 2rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 2.75rem;
  }
}
</style>