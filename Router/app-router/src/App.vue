<template>
  <div id="app">
    <header>
      <nav>
        <a @click="mostrarRouter" class="logo">Logo</a>
        <ul>
          <li>
            <router-link to="/" aria-current-value="Home">Home</router-link>
          </li>
          <li>
            <router-link to="/cursos/:cursoFilter" aria-current-value="Curso"
              >Cursos</router-link
            >
          </li>
        </ul>
        <!--  Irá definir o link para as rotas-->
      </nav>
    </header>
    <!-- Componente que faz o componente relacionado ao path ser renderizado -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    mostrarRouter() {
      this.$router.getRoutes().forEach((router) => {
        const { path, component } = router;
        console.log(path);
        console.log(component);
      });
    },
  },
};
</script>

<style>
.logo {
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #234;
  margin-top: 0 auto;
  border: 4px solid;
  padding: 20px 0;
}

nav {
  padding: 20px 0;
}

.router-link-exact-active {
  color: #4b8;
}

a {
  padding: 10px;
  color: #234;
}
</style>
