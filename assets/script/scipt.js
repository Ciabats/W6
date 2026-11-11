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

const productContainer = document.getElementById("container-prodotti");

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
    cardContainer.classList.add("card", "h-100", "border", "rounded", "p-3", "bg-white", "shadow-sm");
    imgContainer.classList.add("mb-2", "rounded");
    placeholder.classList.add("card-img-top", "h-100");
    cardBody.classList.add("card-body");
    productName.classList.add("fs-5", "fw-bold", "m-0");
    productPrice.classList.add("text-danger", "text-decoration-line-through", "m-0");
    discountPrice.classList.add("text-muted", "m-0");
    cardFooter.classList.add("card-footer", "bg-white", "border-0");
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