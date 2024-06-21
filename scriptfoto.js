/* modali fotografia.html */

// Ottieni l'elemento modale
let modal = document.getElementById("myModal");

// Ottieni l'elemento dell'immagine modale e la didascalia
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let modalText = document.getElementById("modalText");

// Aggiungo un event listener a tutte le immagini con la classe "modal-image"
let images = document.getElementsByClassName("modal-image");
/* devo creare un ciclo for per applicare la modale ad ogni immagine */
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        modalText.textContent = this.getAttribute("data-text");
    });
}

// Ottiengo l'elemento <span> che chiude la finestra modale
let span = document.getElementsByClassName("close")[0];

// Quando l'utente clicca su <span> (x), chiudi la finestra modale
span.addEventListener("click", function() {
    modal.style.display = "none";
});


// Aggiungo un event listener per chiudere la finestra modale cliccando al di fuori di essa
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
