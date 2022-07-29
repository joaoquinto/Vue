<template>
  <div>
    <button @click="ordemCrescente">ordem Crescente</button>
    <button @click="orderDecrescente">order Decrescente</button>
    <table>
      <tr>
        <th>Id</th>
        <th>Nome:</th>
        <th>Preço</th>
        <th>Remover Produto</th>
      </tr>
      <transition-group tag="tbody">
        <tr v-for="({ id, nome, preco }, index) in carrinho" :key="id">
          <td>{{ id }}</td>
          <td>{{ nome }}</td>
          <td>{{ preco | formatPreco }}</td>
          <td><button @click="remover(index)">Remover</button></td>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProdutosData",
  data() {
    return {
      carrinho: [
        { id: "001", nome: "Notebook", preco: 2399 },
        { id: "002", nome: "Smartphone", preco: 1390 },
        { id: "003", nome: "RTX2060", preco: 3500 },
      ],
    };
  },
  filters: {
    formatPreco(value) {
      return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
  methods: {
    remover(id) {
      this.carrinho.splice(id, 1);
    },
    ordemCrescente() {
      this.carrinho.sort((x, y) => {
        return x.preco - y.preco;
      });
    },
    orderDecrescente() {
      this.carrinho
        .sort((x, y) => {
          return x.preco - y.preco;
        })
        .reverse();
    },
  },
};
</script>

<style>
.v-enter.active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-move {
  transition: transform 0.3s;
}
</style>