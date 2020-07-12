const btn = document.getElementById('btn');
const input = document.getElementById('user');

btn.onclick = function() {
    if(input.value === '') {
        let msg = 'Você precisa informar um usuário';
        Manipulator.adicionarAlert(msg);
    } else {
        let value = input.value;
        let devs = value.split(';');
        for(let d of devs) {
            d = d.trim();
            search(d);
        }
        input.value = '';
    }
    
}

function search(user) {
    const url = `https://api.github.com/users/${user}`;
    // AjaxRequest.sendRequest(url, user); // AJAX Puro
    // PromiseRequest.sendRequest(url, user); // AJAX com promise
    AxiosRequest.sendRequest(url, user); // Axios
}

function init() {
    Devs.loadDevs();
}

$('.btn-colapse').on('click', function (button) {
    const icon = button.target.innerHTML;
    const downArrow = 'keyboard_arrow_down';
    const upArrow = 'keyboard_arrow_up'
    if(icon === downArrow) {
        button.target.innerHTML = upArrow;
    } else {
        button.target.innerHTML = downArrow;
    }
});

init();