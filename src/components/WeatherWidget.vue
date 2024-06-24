<template>
  <div class="weather-widget p-4 bg-light rounded shadow">
    <h2 class="widget-title mb-4">Weather</h2>
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        v-model="location"
        placeholder="input location"
      />
      <div class="input-group-append">
        <button class="btn btn-danger btn-lg" type="button" @click="fetchWeatherData">
          Cari
        </button>
      </div>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location mb-2">{{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        {{ Math.round(weatherData.main.temp - 273.15) }}°C
      </p>
      <p v-if="weatherData.weather" class="description mb-0">
        {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p v-else class="loader">Memuat data...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
      weatherData: null,
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = "b7bfca7b27a3485144fea086c50d09dc";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        this.weatherData = data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<style scoped>
.weather-widget {
margin: 0 auto;
  margin-top: 0px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  max-width: 400px;
  
}

.widget-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group-append {
  display: flex;
}

.input-group-append button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.form-control {
  border-radius: 4px;
  flex: 1;
}

.location {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
}

.temperature {
  font-size: 40px;
  color: #ff5722;
  margin-top: 5px;
  text-align: center;
}

.description {
  font-size: 18px;
  text-align: center;
}

.loader {
  font-size: 16px;
  text-align: center;
  margin-top: 15px;
}

.btn-danger {
  background-color: #ff5722; 
  color: white; 
}
</style>
