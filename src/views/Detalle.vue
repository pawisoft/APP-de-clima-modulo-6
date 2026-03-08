<template>
  <div class="container my-5">
    <router-link to="/" class="btn btn-secondary mb-3">← Volver</router-link>
    <div v-if="datos" class="bg-white p-5 rounded shadow-sm">
      <h2>{{ datos.city.name }}</h2>
      <p>Clima actual: {{ datos.list[0].main.temp }}°C</p>

      <h4 class="mt-4">Pronóstico</h4>
      <ul>
        <li v-for="(dia, index) in datos.list.slice(0,5)" :key="index">
          {{ dia.dt_txt }} - {{ dia.main.temp }}°C - {{ dia.weather[0].description }}
        </li>
      </ul>

      <h4 class="mt-4">Estadísticas</h4>
      <p>Mínimo: {{ stats.minSemana }}°C</p>
      <p>Máximo: {{ stats.maxSemana }}°C</p>
      <p>Promedio: {{ stats.promedio }}°C</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detalle",
  data() {
    return { datos: null, stats: {} };
  },
  async mounted() {
    const ciudad = this.$route.params.nombre;
    const datos = await this.$service.fetchPronostico(ciudad);
    this.datos = datos;

    const temps = datos.list.map(d => d.main.temp);
    this.stats = {
      minSemana: Math.min(...temps),
      maxSemana: Math.max(...temps),
      promedio: (temps.reduce((a,b)=>a+b,0)/temps.length).toFixed(1)
    };
  }
};
</script>