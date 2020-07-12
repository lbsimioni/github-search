class Devs {
    static devsList = [];
    static devsCurrent = [];

    static loadDevs() {
        this.devsList = JSON.parse(localStorage.getItem('devs')) || [];
        for(let dev of this.devsList) {
            search(dev);
        }
    }

    static addDev(dev) {
        this.devsList.push(dev);
        this.setStorage();
    }

    static removeDev(dev) {
        this.devsCurrent.splice(this.devsList.indexOf(dev), 1);
        this.devsList.splice(this.devsList.indexOf(dev), 1);
        this.setStorage()
    }

    static setStorage() {
        localStorage.setItem('devs', JSON.stringify(this.devsList));
    }
}