//array prodotti da cui creo griglia
const products = [
    {
        name: "Sneaker run",
        price: 89,
        description: "Scarpa leggera e ammortizzata, pensata per lunghe corse su asfalto",
    },
    {
        name: "T-shirt basic",
        price: 19,
        description: "T-shirt in cotone morbido, adatta a ogni occasione.",
    },
    {
        name: "Borsa city",
        price: 49,
        description: "Borsa spaziosa con tasche interne, ideale per il lavoro e il tempo libero.",
    }
];

//array slide carousel
const carousel = [
    {
        title: "Saldi di Primavera",
        text: "Scopri le offerte sui prodotti in evidenza, fino al 50% di sconto",
        linkButton: "Vedi prodotti",
    },
    {
        title: "Nuova collezione",
        text: "Scopri gli arrivi della settimana",
    },
    {
        title: "Spedizione gratis",
        text: "Sopra i 50€ su tutto il sito",
    }
]

//variabili globali
const productContainer = document.getElementById("container-prodotti");
const carouselContainer = document.getElementById("carousel-container");
const darkMode = document.getElementById("dark-mode");


// funzioni

//funzione per creare il carosello
function creaCarousel() {
    carousel.forEach((slide, i) => {

        if (i === 0) {
            //creo i tag html
            const carouselItem = document.createElement("div");
            const carouselBody = document.createElement("div");
            const carouselTitle = document.createElement("h2");
            const carouselText = document.createElement("p");
            const carouselButton = document.createElement("a");

            //assegno le classi
            carouselItem.classList.add("carousel-item", "active", "bg-primary", "text-center", "py-5", "h-100");
            carouselBody.classList.add("container", "text-center");
            carouselTitle.classList.add("fs-1", "fw-bold", "mb-3");
            carouselText.classList.add("fs-5", "text-white", "mb-4");
            carouselButton.classList.add("d-inline-block", "bg-primary", "text-white", "text-decoration-none", "py-2", "px-4", "rounded", "btn", "btn-primary");

            //eventuali attributi
            carouselButton.setAttribute("href", "#evidence");
            carouselItem.style.minHeight = "250px";

            //mi riporto i valori dall'arrray
            carouselTitle.textContent = slide.title;
            carouselText.textContent = slide.text;
            carouselButton.textContent = slide.linkButton;

            //creo la struttura HTML
            carouselContainer.appendChild(carouselItem);
            carouselItem.appendChild(carouselBody);
            carouselBody.appendChild(carouselTitle);
            carouselBody.appendChild(carouselText);
            carouselBody.appendChild(carouselButton);


        }
        else if (i === 1) {
            //creo i tag html
            const carouselItem = document.createElement("div");
            const carouselBody = document.createElement("div");
            const carouselTitle = document.createElement("h2");
            const carouselText = document.createElement("p");

            //assegno le classi
            carouselItem.classList.add("carousel-item", /*"active",*/"bg-success", "text-center", "py-5", "h-100");
            carouselBody.classList.add("container", "text-center");
            carouselTitle.classList.add("fs-1", "fw-bold", "mb-3");
            carouselText.classList.add("fs-5", "text-white", "mb-4");

            //eventuali attributi
            carouselItem.style.minHeight = "250px";

            //mi riporto i valori dall'arrray
            carouselTitle.textContent = slide.title;
            carouselText.textContent = slide.text;

            //creo la struttura HTML
            carouselContainer.appendChild(carouselItem);
            carouselItem.appendChild(carouselBody);
            carouselBody.appendChild(carouselTitle);
            carouselBody.appendChild(carouselText);

        }
        else {
            //creo i tag html
            const carouselItem = document.createElement("div");
            const carouselBody = document.createElement("div");
            const carouselTitle = document.createElement("h2");
            const carouselText = document.createElement("p");

            //assegno le classi
            carouselItem.classList.add("carousel-item", /*"active",*/"bg-dark", "text-center", "py-5", "h-100");
            carouselBody.classList.add("container", "text-center");
            carouselTitle.classList.add("fs-1", "fw-bold", "mb-3");
            carouselText.classList.add("fs-5", "text-white", "mb-4");


            //eventuali attributi
            carouselItem.style.minHeight = "250px";

            //mi riporto i valori dall'arrray
            carouselTitle.textContent = slide.title;
            carouselText.textContent = slide.text;

            //creo la struttura HTML
            carouselContainer.appendChild(carouselItem);
            carouselItem.appendChild(carouselBody);
            carouselBody.appendChild(carouselTitle);
            carouselBody.appendChild(carouselText);
        }
    });
}

//funzine che crea la griglia dei prodotti
function creaCard() {

    products.sort

    products.forEach((product, i) => {

        //creo i tag html
        const article = document.createElement("article");
        const cardContainer = document.createElement("div");
        const imgContainer = document.createElement("div");
        const placeholder = document.createElement("img");
        const cardBody = document.createElement("div");
        const productName = document.createElement("h3");
        const productPrice = document.createElement("p");
        const discountPrice = document.createElement("p");
        const cardFooter = document.createElement("div");
        const buttonDetails = document.createElement("button");

        //assegno le classi
        article.classList.add("col-12", "col-sm-6", "col-xl-4", "mb-3");
        cardContainer.classList.add("card", "h-100", "border", "rounded", "p-3", "shadow-sm");
        imgContainer.classList.add("mb-2", "rounded");
        placeholder.classList.add("card-img-top", "h-100");
        cardBody.classList.add("card-body");
        productName.classList.add("fs-5", "fw-bold", "m-0");
        productPrice.classList.add("text-danger", "text-decoration-line-through", "m-0");
        discountPrice.classList.add( "m-0");
        cardFooter.classList.add("card-footer", "border-0");
        buttonDetails.classList.add("btn", "btn-primary", "w-100");

        //eventuali attributi
        placeholder.setAttribute("src", "https://placehold.co/300x180");
        placeholder.setAttribute("alt", "Sneaker run");
        buttonDetails.setAttribute("data-bs-toggle", "modal");
        buttonDetails.setAttribute("data-bs-target", `#prodotto-${i + 1}`);

        //assegno valori
        productName.textContent = product.name;
        productPrice.textContent = "€" + product.price.toFixed(2);

        const discount = product.price - (product.price / 100) * 30;
        discountPrice.textContent = "€" + discount.toFixed(2).replace(".", ",")
        buttonDetails.textContent = "Dettagli";

        //appendo al genitore, creo la struttura
        productContainer.appendChild(article);
        article.appendChild(cardContainer);
        cardContainer.appendChild(imgContainer);
        imgContainer.appendChild(placeholder);
        cardContainer.appendChild(cardBody);
        cardBody.appendChild(productName);
        cardBody.appendChild(discountPrice);
        cardBody.appendChild(productPrice);
        cardContainer.appendChild(cardFooter);
        cardFooter.appendChild(buttonDetails);

        article.appendChild(cardContainer);
    })
}

//gestione dark mode
darkMode.addEventListener("click", function(){
    document.body.classList.toggle("dark")
})

creaCarousel();
creaCard();