<template>
  <nav :class="{ scrolled: isScrolled }">
    <button @click="goHome" class="logo">Paulien.</button>

    <ul>
      <li>
        <button @click="scrollTo('about')" :class="{ active: activeSection === 'about' }">About</button>
      </li>
      <li>
        <button @click="scrollTo('skills')" :class="{ active: activeSection === 'skills' }">Skills</button>
      </li>
      <li class="has-dropdown">
        <button @click="scrollTo('projects')" :class="{ active: activeSection === 'projects' }">
          Projects ▾
        </button>
        <ul class="dropdown">
          <li><RouterLink to="/projects/border-moonlight">Border:Moonlight</RouterLink></li>
          <li><RouterLink to="/projects/digital-paradise">Digital Paradise</RouterLink></li>
          <li><RouterLink to="/projects/cz-zorgvinder">CZ Zorgvinder</RouterLink></li>
        </ul>
      </li>
      <li>
        <button @click="scrollTo('contact')" :class="{ active: activeSection === 'contact' }">Contact</button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const activeSection = ref('')

function goHome() {
  if (route.path !== '/') {
    router.push('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

async function scrollTo(id) {
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  } else {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20

  const sections = ['contact', 'projects', 'skills', 'about']
  let found = false

  for (const id of sections) {
    const el = document.getElementById(id)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom >= 150) {
        activeSection.value = id
        found = true
        break
      }
    }
  }

  if (!found) activeSection.value = ''
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 3rem;
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

nav.scrolled {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.logo {
  font-weight: bold;
  font-size: 1.4rem;
  text-decoration: none;
  color: #1a1a2e;
  font-family: 'DM Serif Display', serif;
}

ul {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

a, button {
  text-decoration: none;
  color: #1a1a2e;
  font-size: 1rem;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;
  position: relative;
  display: flex;
  align-items: center;
}

button:hover {
  color: #e07a7a;
}

button.active {
  color: #e07a7a;
}

button.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e07a7a;
  border-radius: 2px;
}

.has-dropdown {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  margin-top: 0rem;
  left: 0;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 0.75rem 1rem;
  gap: 0.5rem;
  min-width: 180px;
  border-radius: 8px;
  border-top: 12px solid transparent;
}

.has-dropdown:hover .dropdown {
  display: flex;
}
</style>