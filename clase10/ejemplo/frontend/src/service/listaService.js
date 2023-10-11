import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://651e0fe344e393af2d5a7dc8.mockapi.io/lista',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    async loadData() {
        try {
            const response = await apiClient.get('/');
            return response.data
        } catch (error) {
            throw "Error de conexion"
        }
    },
    async saveData(elem) {
        try {
            await apiClient.post('/', elem);
        } catch (error) {
            throw "Error de conexion"
        }
    },
    async deleteData(id) {
        try {
            await apiClient.delete("/" + id)
        } catch (error) {
            throw "Error de conexion"
        }
    },
    async putData(id, elem) {
        try {
            await apiClient.put("/" + id, elem)
        } catch (error) {
            throw "Error de conexion"
        }
    },
}
