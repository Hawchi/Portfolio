<template>
  <footer>
    <p class="copyright">© 2026 - Paulien Ma</p>
    <div class="socials">
     <a href="mailto:paulienma1@gmail.com" class="social-icon">✉</a>
    <a href="https://www.linkedin.com/in/paulien-ma-00a720402/" target="_blank" class="social-icon">in</a>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 8rem;
  background-color: #fff;
}

.copyright {
  font-family: 'Baloo Bhai 2', sans-serif;
  font-size: 0.9rem;
  color: #555;
}

.socials {
  display: flex;
  gap: 0.75rem;
}

.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #1A2D55;
  color: white;
  text-decoration: none;
  font-family: 'Baloo Bhai 2', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.social-icon:hover {
  background-color: #e07a7a;
}

@media (max-width: 768px) {
  footer {
    padding: 1.25rem 2rem;
  }
}
</style>