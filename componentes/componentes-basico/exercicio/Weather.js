export default {
  data() {
    return {
      temperatura: 0,
    };
  },
  methods: {
    fetchWeather() {
      fetch("https://api.origamid.dev/weather/rio")
        .then((response) => response.json())
        .then((body) => (this.temperatura = body.consolidated_weather[0].max_temp.toFixed(2)));
    },
  },
  created() {
    this.fetchWeather();
  },
  template: `<p>A temperatura do Rio de Janeiro é de {{temperatura}}°C</p>`,
};
