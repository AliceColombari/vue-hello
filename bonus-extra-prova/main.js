//  Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// prova -> ingrandisci e diminusci l'immagine al click sul btn
var app = new Vue(
    {
        el: "#root",
        data: {
            message: "Vue.js",
            image: "https://www.geekandjob.com/uploads/wiki/f236a1aa005ef9a93041f294749e86d1.png",
            classe: 'size-image-1',
            text: 'Clicca il bottone per cambiare la dimensione'
        },
        methods: {
            cambiaDimensione: function() {
                if (this.classe == 'size-image-1') {
                    this.classe = 'size-image-2';
                } else {
                    this.classe = 'size-image-1';
                }
            }
        }
    }
);