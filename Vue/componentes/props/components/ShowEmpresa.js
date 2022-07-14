export default {
  name: "show-empresa",
  props: {
    empresa: {
      type: Object,
    },
  },
  template: `
   <ul>
      <li
       for="(dado, {symbol}) in empresa" :key="symbol">
       {{dado}}
      </li>
   </ul>
  `,
};
