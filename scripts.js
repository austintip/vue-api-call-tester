const app = new Vue({

    el: '#main',

    data: {

        result: ' ',
        responseAvailable: false,
        // apiKey: "40e78f03dbmsh73ad89779995765p1cfe84jsn495944b9cff8"

    },

    methods: {

        fetchAPIData() {
            this.responseAvailable = false;
            fetch("https://pokeapi.co/api/v2/pokemon/1", {
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