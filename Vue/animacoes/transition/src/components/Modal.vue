 <template>
  <div>
    <button @click="modalAtivo = !modalAtivo">Cadastre-se</button>
    <transition name="modal">
      <div class="modal_wrapper" v-show="modalAtivo" @click="cliqueFora">
        <div class="modal">
          <h1>Cadastre-se</h1>
          <form action="">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label for="senha">Password:</label>
            <input type="password" id="senha" name="senha" />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>
 
 <script>
export default {
  name: "ModalCadastro",
  data() {
    return {
      modalAtivo: false,
    };
  },
  methods: {
    cliqueFora(event) {
      const close = event.currentTarget === event.target;
      if (close) this.modalAtivo = false;
    },
  },
};
</script>
 
 <style>
* {
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  margin: 0 0 20px 0;
}

.modal_wrapper {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: scroll;
}

label {
  display: block;
  margin-bottom: 5px;
}

button {
  cursor: pointer;
}

.modal input,
.modal button {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 1rem;
  margin-bottom: 20px;
}

.modal button,
button {
  display: block;
  width: 200px;
  background-color: #84e;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-left: auto;
  margin-right: auto;
}

.modal {
  background-color: #e5eee5;
  padding: 20px;
  max-width: 400px;
  margin: 30vh auto 0 auto;
  z-index: 10;
}

.modal-enter-to .modal {
  animation: slide 0.3s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-leave-to {
  animation: slide 0.3s reverse;
}

.modal-enter-active,
.modal-leave-to {
  transition: opacity 0.3s;
}

@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}
</style>