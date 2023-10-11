import { defineStore } from 'pinia'
import axios from 'axios'
export const loginStore = defineStore('login', {
    state: () => {
        return {
            usuario: {},
            estaLogeado: false
        }
    },
    actions: {
        async login(usuario) {
            try {
                const datos = await axios.post("http://localhost:3000/login", usuario);
                console.log(datos);
                if (datos.status == 200) {
                    this.estaLogeado = true;
                    this.usuario.email = usuario.email;
                    localStorage.setItem('usuario', JSON.stringify(
                        { email: usuario.email, token: datos.data.token }))
                } else {
                    this.estaLogeado = false;
                }
            } catch (e) {
                console.log(e);
            }
        },
    }
})
