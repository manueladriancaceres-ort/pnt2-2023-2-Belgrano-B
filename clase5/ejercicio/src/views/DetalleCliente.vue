<template>
    <div>
        <h2>Detalle</h2>
        {{clientes}}
        <FormularioCliente @agregar="agregarALaLista"/>
    </div>
</template>

<script>
import FormularioCliente from './FormularioCliente.vue'
export default {
    components: {
        FormularioCliente
    },
    data() {
        return {
            clientes: []
        }
    },
    methods: {
        agregarALaLista(cliente) {
            this.clientes.push(cliente);
        }
    }
}
</script>

<style>

</style>