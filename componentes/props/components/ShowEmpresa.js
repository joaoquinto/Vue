export default {
  name: "show-empresa",
  props: {
    empresa: {
      type: Object,
    },
  },
  filters: {
    keyUpperCase(parm) {
      return `${parm.replace(parm.charAt(0), parm.charAt(0).toUpperCase())}`;
    },
  },
  template: `
   <ul>
      <li v-for="(dado, key ,{symbol}) in empresa" :key="symbol">
     {{key | keyUpperCase}}:  {{dado}}
      </li>
   </ul>
  `,
};
