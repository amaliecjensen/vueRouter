<script setup>
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  padding: 2rem;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
}

nav a:hover {
  background-color: hsla(160, 100%, 37%, 0.1);
}

nav a.router-link-active {
  background-color: hsla(160, 100%, 37%, 0.2);
  font-weight: bold;
}

main {
  padding: 2rem;
}
</style>
