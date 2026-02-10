// on charge le fichier JSON

fetch("../Component/carte.json")

  // on transforme la réponse en objet JavaScript
  .then(response => response.json())

  // on récupère les données du JSON
  .then(data => {

    // on récupère le tableau des cartes action
    const cartes = data.cartes_action;

    // on récupère la div HTML qui va contenir les cartes
    const container = document.getElementById("cartes");

    // on parcourt chaque carte du JSON
    cartes.forEach(carte => {

      // on crée une div pour UNE carte
      const carteDiv = document.createElement("div");
      carteDiv.className = "carte";

      // on crée le nom de la carte
      const nom = document.createElement("h3");
      nom.textContent = carte.nom;

      // on crée la description
      const description = document.createElement("p");
      description.textContent = carte.description;

      // on crée l'image
      const image = document.createElement("img");
      image.src = carte.image;
      image.alt = carte.nom;

      // on met tous les éléments dans la carte
      carteDiv.appendChild(nom);
      carteDiv.appendChild(description);
      carteDiv.appendChild(image);

      // on ajoute la carte dans la page
      container.appendChild(carteDiv);
    });
  })

  