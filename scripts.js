const app = new Vue({

    el: '#main',

    data: {

        result: ' ',
        responseAvailable: false,
        randomNum: 0
    },

    methods: {

        fetchAPIData() {
            this.responseAvailable = false;
            this.randomNum = Math.floor(Math.random() * 151)
            fetch(`https://pokeapi.co/api/v2/pokemon/${this.randomNum}`, {
                "method": "GET",
                // "headers": {
                // }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        alert("Server returned " + response.status + " : " + response.statusText);
                    }
                })
                .then(response => {
                    this.result = response.name;
                    this.responseAvailable = true;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
})