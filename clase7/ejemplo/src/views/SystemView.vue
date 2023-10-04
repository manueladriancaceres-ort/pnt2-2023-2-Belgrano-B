<template>
  <div>
    <h2>System</h2>
    codigo <input v-model="usuario" type="text">
    <button v-on:click="irAUsuario">Ir a Usuario </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: ''
    }
  },
  methods: {
    irAUsuario() {
      this.$router.push("/user/" + this.usuario)
    }
  }
}
</script>

<style>

</style>