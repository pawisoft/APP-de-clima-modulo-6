# APP-de-clima-modulo-6
🌦️ WeatherApp Vue SPA - Por Paulina Pizarro🌦️

Esta aplicación de clima para la Región de Tarapacá, Chile, fue refactorizado como SPA con Vue.js y Vue Router.

Tecnologías aplicadas

- Vue.js 3
- Vue Router
- Bootstrap 5
- OpenWeather API (se decidió conservar el API para obtener la información del clima en tiempo real)

Dos vistas 
- Home: Lista de ciudades con clima actual.
- Detalle: Pronóstico extendido y estadísticas semanales.

Navegación
- SPA con rutas dinámicas (`/` y `/lugar/:nombre`)
- Sin recarga de página

Interacciones
- Búsqueda de ciudades ( con `v-model`)
- Navegación entre vistas (con `<router-link>`)

La estructura es la siguiente:

src/ 
├── assets/ 
├── components/ 
├── views/ 
│   ├── Home.vue 
│   └── Detalle.vue 
├── router/ 
│   └── index.js 
├── services/ 
│   └── WeatherService.js 
├── App.vue 
└── main.js

Instalación con Vue (Vite)

Ingresar a la terminal

npm install
npm run dev

Repositorio de la app: 
https://github.com/pawisoft/APP-de-clima-modulo-6
