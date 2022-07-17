<template>
  <div>
    <h1>Entre em contato conosco</h1>
    <form action="">
      <label for="">Nome:</label>
      <input type="text" v-model="user.nome" />
      <label for="">Email</label>
      <input type="email" v-model="user.email" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="user.texto"
      ></textarea>
      <button @click.prevent="sendChat">Enviar</button>
    </form>
    <p v-if="enviado">
      Chat enviado, aguarde que iremos entrar em contato com você
    </p>
  </div>
</template>

<script>
export default {
  name: "FormularioEmpresas",
  data() {
    return {
      enviado: null,
      user: {
        nome: null,
        email: null,
        texto: null,
      },
    };
  },
  methods: {
    sendChat() {
      this.enviado = true;
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 20px;
}

form button {
  margin-top: 20px;
}
</style>