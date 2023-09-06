<template>
    <div>
        <p>Cliente</p><p>Formulario clientes</p>
        Nombre <input v-model="cliente.nombre" type="text">        <br/>
        Apellido <input v-model="cliente.apellido"  type="text" > <br/>
        <button v-on:click="agregarCliente">Agregar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cliente: {
                nombre: '',
                apellido: ''
            }
        }
    },
    methods: {
        agregarCliente() {
            this.$emit('agregar',this.cliente)
        }
    }
}
</script>

<style>

</style>