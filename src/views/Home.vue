<template>
  <main class="container my-5">
    <input v-model="busqueda" class="form-control mb-3" placeholder="Buscar ciudad..." />

    <div class="row">
      <div v-for="ciudad in ciudadesFiltradas" :key="ciudad.name" class="col-12 col-sm-6 col-lg-3 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body text-center d-flex flex-column">
            <h5 class="fw-bold text-uppercase small text-muted">{{ ciudad.sys.country }}</h5>
            <h3 class="mb-3">{{ ciudad.name }}</h3>
            <div class="display-5 fw-bold text-primary mb-2">{{ Math.round(ciudad.main.temp) }}°C</div>
            <p class="text-capitalize mb-4 text-muted">{{ ciudad.weather[0].description }}</p>
            <router-link :to="`/lugar/${ciudad.name}`" class="btn btn-primary mt-auto">
              Ver Detalles
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      busqueda: "",
      ciudades: [] 
    };
  },
  computed: {
    ciudadesFiltradas() {
      return this.ciudades.filter(c =>
        c.name.toLowerCase().includes(this.busqueda.toLowerCase())
      );
    }
  },
  async mounted() {
    
    const promesas = ["Iquique","Alto Hospicio","Pozo Almonte","Huara","Pica"].map(c =>
      this.$service.fetchClimaActual(c)
    );
    this.ciudades = await Promise.all(promesas);
  }
};
</script>