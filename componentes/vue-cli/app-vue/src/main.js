/* Importando arquivo vue */
import Vue from 'vue'
/* Importando o componente vue */
import App from './App.vue'

Vue.config.productionTip = false

/* Iniciando a instância Vue */
new Vue({
  render: h => h(App),
}).$mount('#app')
