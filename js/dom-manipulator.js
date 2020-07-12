class Manipulator {
    static container = document.getElementById('card-input');
    static div = document.getElementById('card-container');

    static adicionarDev(dev) {
        if(Devs.devsCurrent.indexOf(dev.login) !== -1) {
            this.adicionarAlert(`O usuário ${dev.login} já está sendo exibido`);
        } else {
            if(Devs.devsCurrent.length === Devs.devsList.length)
                this.adicionarSuccess(`O usuário ${dev.login} foi adicionado com sucesso`);

            Devs.devsCurrent.push(dev.login);
            if(Devs.devsList.indexOf(dev.login) === -1)
                Devs.addDev(dev.login);

            this.adicionarCard(dev)
        }
    }

    static adicionarCard(dev) {
        let img = dev.avatar_url;
        let name = dev.name || 'Nome não indentificado';
        let content = dev.bio || 'Não foi adicionado nenhuma bio';
    
        let divCard = document.createElement('div');
        divCard.className = 'col-md-3 mb-4';
    
        let card = document.createElement('div');
        card.className = 'card mb-2';

        let cardImg = document.createElement('img');
        cardImg.className = 'card-img-top';
        cardImg.src = img;
        cardImg.alt = name;
        card.appendChild(cardImg);
    
        let cardContent = document.createElement('div');
        cardContent.className = 'card-body';

        let cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title';
        cardTitle.innerText = name;
        cardContent.appendChild(cardTitle);
    
        let cardContentP = document.createElement('p');
        cardContentP.className = 'card-text';
        cardContentP.innerText = content;
    
        cardContent.appendChild(cardContentP);
        card.appendChild(cardContent);

        let cardActions = document.createElement('div');
        cardActions.className = 'mx-2 mb-2';

        let cardContentButton = document.createElement('button');
        cardContentButton.className = 'btn btn-danger col-md-12';
        cardContentButton.innerText = 'Deletar'
        cardContentButton.onclick = function() { Manipulator.deleteCard(cardContentButton, dev.login); }

        cardActions.appendChild(cardContentButton);
        card.appendChild(cardActions);
    
        divCard.appendChild(card);
        Manipulator.div.insertBefore(divCard, Manipulator.div.childNodes[0]);
        document.getElementById('card-visible').classList.remove('invisible');
    }
    
    static deleteCard(btn, dev) {
        const card = btn.parentNode.parentNode.parentNode;
        Manipulator.div.removeChild(card);
        Devs.removeDev(dev);
        this.adicionarSuccess(`O usuário ${dev} foi removido com sucesso`);
    
        let qtd = document.getElementById('card-container').childNodes.length;
        if(qtd === 0) {
            document.getElementById('card-visible').classList.add('invisible');
        }
    }

    static adicionarAlert(msg) {
        this.adicionarToast(msg, 'toast-warning', 'text-light', 'Alerta', 'report_problem');
    }

    static adicionarSuccess(msg) {
        this.adicionarToast(msg, 'bg-success', 'text-light', 'Sucesso', 'done');
    }

    static adicionarToast(msg, containerClass, textClass, title, icon) {
        const containerToaster = document.getElementById('toast-container');

        let toast = document.createElement('div');
        toast.className = 'toast';
        toast.setAttribute('data-delay', '1500');

        let toastHeader = document.createElement('div');
        toastHeader.className = `toast-header d-flex align-items-center ${containerClass}`;

        let span = document.createElement('span');
        span.className = `material-icons mr-3 ${textClass}`;
        span.innerText = icon;

        let strong = document.createElement('strong');
        strong.className = `mr-auto ${textClass}`;
        strong.innerText = title;

        let button = document.createElement('button');
        button.className = `ml-2 mb-1 close ${textClass}`;
        button.type = 'button';
        button.setAttribute('data-dismiss', 'toast');

        let spanClose = document.createElement('span');
        spanClose.setAttribute('aria-hidden', 'true');
        spanClose.innerHTML = '&times;';

        button.appendChild(spanClose);

        toastHeader.appendChild(span);
        toastHeader.appendChild(strong);
        toastHeader.appendChild(button);
        toast.appendChild(toastHeader);

        let toastBody = document.createElement('div');
        toastBody.className = `toast-body ${containerClass} ${textClass}`
        toastBody.innerText = msg;

        toast.appendChild(toastBody);
        containerToaster.appendChild(toast);

        $(toast).toast();
        $(toast).toast('show');

        $(toast).on('hidden.bs.toast', function() {
            containerToaster.removeChild(toast);
        });
    }
}

