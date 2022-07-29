<template>
  <div>
    {{curso}}
    <ul>
      <li><router-link to="JavaScript">JavaScript</router-link></li>
      <li>
        <router-link to="HTML e CSS para Iniciantes"
          >HTML e CSS para Iniciantes</router-link
        >
      </li>
      <li>
        <router-link to="UI Design para Iniciantes"
          >UI Design para Iniciantes</router-link
        >
      </li>
      <li><router-link to="CSS Flexbox">CSS Flexbox</router-link></li>
      <li>
        <router-link to="WordPress REST API">WordPress REST API</router-link>
      </li>
      <li>
        <router-link to="WooCommerce Como CMS"
          >WooCommerce Como CMS</router-link
        >
      </li>
      <li><router-link to="Bootstrap 4">Bootstrap 4</router-link></li>
      <li><router-link to="Adobe XD">Adobe XD</router-link></li>
      <li>
        <router-link to="WordPress REST API Dogs"
          >WordPress REST API Dogs</router-link
        >
      </li>
    </ul>

    <table>
      <tr>
        <th>id</th>
        <th>nome</th>
        <th>horas</th>
      </tr>
      <tr
        v-for="{ id, curso, horas } in showCurso.length > 0
          ? showCurso
          : cursos"
        :key="id"
      >
        <td>{{ id }}</td>
        <td>{{ curso }}</td>
        <td>{{ horas }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "cursos-view",
  props: ["curso"],
  data() {
    return {
      cursos: [
        {
          id: "001",
          curso: "JavaScript",
          horas: 120,
        },
        {
          id: "002",
          curso: "HTML e CSS para Iniciantes",
          horas: 120,
        },
        {
          id: "003",
          curso: "UI Design para Iniciantes",
          horas: 120,
        },
        {
          id: "004",
          curso: "CSS Flexbox",
          horas: 120,
        },
        {
          id: "005",
          curso: "WordPress REST API",
          horas: 120,
        },
        {
          id: "006",
          curso: "WooCommerce Como CMS",
          horas: 120,
        },
        {
          id: "007",
          curso: "Bootstrap 4",
          horas: 120,
        },
        {
          id: "008",
          curso: "Adobe XD",
          horas: 120,
        },
        {
          id: "009",
          curso: "WordPress REST API Dogs",
          horas: 120,
        },
        {
          id: "010",
          curso: "HTML e CSS para Iniciantes",
          horas: 300,
        },
        {
          id: "011",
          curso: "WordPress REST API Dogs",
          horas: 200,
        },
      ],
    };
  },
  computed: {
    showCurso() {
      const cursoSelecionado = this.cursos.filter((element) => {
        if (element.curso === this.$route.params.curso) {
          return element;
        }
      });
      return cursoSelecionado;
    },
  },
  created() {
    console.log("Esse componente foi criado");
  },
  beforeRouteUpdate(to, from, next) {
    console.log("Att", this.$route.params.curso);
    console.log(from.params);
    console.log(to.params);

    next();
  },
};
</script>

<style>
table {
  margin: 0 auto;
}
</style>