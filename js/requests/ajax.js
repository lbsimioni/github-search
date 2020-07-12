class AjaxRequest {
    static async sendRequest(url, user) {
        const AJAX = new XMLHttpRequest();

        AJAX.open('GET', url)
        AJAX.send(null);

        AJAX.onreadystatechange = function() {
            /*
            ajax.readyState -> 0 => Antes da conexão ser aberta
            ajax.readyState -> 1 => Após abrir a conexão
            ajax.readyState -> 2 => headers (cabeçalhos) foram recebidos
            ajax.readyState -> 3 => Carregando o corpo da requisição (conteúdo/dados)
            ajax.readyState -> 4 => O conteúdo (dados) está pronto para uso
            */
            if(AJAX.readyState === 4) {
                if(AJAX.status === 200) {
                    let dev = JSON.parse(AJAX.response);
                    Manipulator.adicionarDev(dev);
                } else {
                    Manipulator.adicionarAlert(`O usuário: ${user} não foi encontrado.`);
                }
            }
        }
    }
}