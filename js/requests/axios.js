class AxiosRequest {
    static sendRequest(url, user) {
        axios.get(url)
            .then(response => Manipulator.adicionarDev(response.data))
            .catch(() => Manipulator.adicionarAlert(`O usuário: ${user} não foi encontrado.`));
    }
}