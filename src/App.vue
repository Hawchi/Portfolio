<template>
  <NavBar />
  <RouterView />
  <FooterBar />
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import { RouterView } from 'vue-router'
</script>