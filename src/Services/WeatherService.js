export default class WeatherService {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.openweathermap.org/data/2.5/";
  }

  async fetchClimaActual(ciudad) {
    const url = `${this.baseUrl}weather?q=${ciudad},CL&appid=${this.apiKey}&units=metric&lang=es`;
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error(`Error al obtener clima de ${ciudad}`);
    return await respuesta.json();
  }

  async fetchPronostico(ciudad) {
    const url = `${this.baseUrl}forecast?q=${ciudad},CL&appid=${this.apiKey}&units=metric&lang=es`;
    const respuesta = await fetch(url);
    if (!respuesta.ok) throw new Error(`Error al obtener pronóstico de ${ciudad}`);
    return await respuesta.json();
  }
}