class PromiseRequest {
    static sendRequest(url, user) {
        let promise = function() {
            return new Promise(function(resolve, reject) {
                let ajax = new XMLHttpRequest();
                ajax.open('GET', url);
                ajax.send(null);

                ajax.onreadystatechange = function() {
                    if(ajax.readyState === 4){
                        if(ajax.status === 200){
                            resolve(JSON.parse(ajax.responseText));
                        }else{
                            reject(`O usuário: ${user} não foi encontrado.`)
                        }
                    }
                }
            });
        }

        promise()
            .then(response => Manipulator.adicionarDev(response))
            .catch(error => Manipulator.adicionarAlert(error))
    }
}