  const products = [
    {
        image: "capture/Skyjo-Action-removebg-preview.png",
        title:"Fnac",
        price: "15.50€",
        description: "Au début de la partie les joueurs disposent 12 cartes faces cachées devant eux et en retournent 2 faces visibles. A son tour de jeu le joueur doit piocher une carte dans la pioche ou dans la défausse. Ou une carte action. S’il se décide pour la carte visible de la défausse il doit immédiatement échanger cette carte avec l’une de ses douze cartes et la poser face visible. Dès qu’un joueur atteint 100 points ou plus, le joueur ayant cumulé le moins de points remporte la partie !",
        buttonText: "Acheter maintenant",
        link: "https://www.espritjeu.com/jeux-de-strategie/skyjo-action.html?srsltid=AfmBOorKvqo0QBOIz3FlZe4pXjQbuOn-iiqjZFCf-cohLRy6jdsr2z0_"
    },
    {
        image: "capture/Skyjo-Action-removebg-preview.png",
        title:"Amazon",
        price: "15.95€",
        description: "Grand plaisir de jeu pour vos amis et votre famille. SKYJO est un jeu de cartes amusant qui plaît beaucoup aux enfants et aux grands amateurs de jeux (adultes). Le jeu de cartes convient très bien pour les petites parties de temps en temps et est également un enrichissement pour une soirée de jeu conviviale et agréable",
        buttonText: "Acheter maintenant",
        link:"https://www.amazon.fr/SKYJO-Magilano-Nouveau-divertir-Amusantes/dp/B082YWGB3R"
    },
    {
        image: "capture/Skyjo-Action-removebg-preview.png",
        title:"Magilano",
        price: "14.90",
        description: "Dans Skyjo, chaque joueur a 12 cartes dans un modèle 3x4, deux d'entre elles sont visibles, toutes les autres sont cachées. À votre tour, vous pouvez prendre la carte au-dessus de la défausse ou piocher dans la pile. Vous pouvez échanger une carte (cachée ou ouverte) de votre présentoir avec celle-ci ou vous défausser de la carte tirée pour retourner une carte face visible. ",
        buttonText: "Acheter maintenant",
        link:"https://www.philibertnet.com/fr/magilano/90390-skyjo-action-4260470080056.html"
    }
];

 const app = document.getElementById("app");

// Pour chaque produit dans le tableau
products.forEach(product => {

    // On crée une nouvelle carte
    const card = document.createElement("div");
    card.className = "product-card";

    // On injecte le HTML
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="Produit">
        </div>

          <div class="product-content">
            <h2 class="product-title">${product.title}</h2>
            <h3 class="product-price">${product.price}</h3>
            <p class="product-description">${product.description}</p>
            <a href="${product.link}" class="product-button" target="_blank">
                ${product.buttonText}
            </a>
        </div>
    `;

    // On ajoute la carte à la page
    app.appendChild(card);
});

