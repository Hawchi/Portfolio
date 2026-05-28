<template>
  <section class="projects" id="projects">
    <div class="projects-header">
      <p class="label">MY WORK</p>
      <h2>Selected <em>Projects</em></h2>
    </div>

    <div class="projects-list">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-card"
        :class="{ reverse: index % 2 !== 0 }"
      >
        <div class="project-image">
        <img :src="project.heroImage || `/${project.id}.png`" :alt="project.title" />
        </div>
        <div class="project-info">
          <p class="category">{{ project.category }}</p>
          <h3>{{ project.title }}</h3>
          <p class="description">{{ project.shortDescription }}</p>
          <RouterLink :to="`/projects/${project.id}`" class="btn-primary">Read More</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { projects } from '../data/projects.js'
</script>

<style scoped>
.projects {
  padding: 6rem clamp(2rem, 8vw, 12rem);
  background-color: #fff;
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
  margin-bottom: 3rem;
}

h2 em {
  color: #e07a7a;
  font-style: italic;
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.projects-header {
  max-width: 1200px;
  margin: 0 auto 3rem auto;
}

.project-card {
  display: flex;
  align-items: center;
  gap: 3rem;
  background-color: #dbe9ff;
  border-radius: 16px;
  padding: 2rem;
}

.project-card.reverse {
  flex-direction: row-reverse;
}

.project-image {
  flex: 1;
}

.project-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.project-info {
  flex: 1;
}

.category {
  color: #e07a7a;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  margin-bottom: 0.5rem;
}

h3 {
  font-family: 'DM Serif Display', serif;
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 0.75rem;
}

.description {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
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
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: #e07a7a;
}

@media (max-width: 1024px) {
  .projects {
    padding: 4rem 3rem;
  }
}

@media (max-width: 768px) {
  .projects {
    padding: 4rem 2rem;
  }

  .project-card,
  .project-card.reverse {
    flex-direction: column;
  }

  h2 {
    font-size: 2.75rem;
  }
}
</style>