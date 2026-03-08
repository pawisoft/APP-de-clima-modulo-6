<template>
  <div id="app">
    <header class="hero-section text-center shadow-sm">
      <h1 class="display-4 fw-bold">Estado del Tiempo</h1>
      <p class="lead">Región de Tarapacá, Chile</p>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>