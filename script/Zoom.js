
function zoomAvis() {

  // On sélectionne les images d’avis
  const imagesAvis = document.querySelectorAll(".avis-image img");

  
  console.log("Images avis :", imagesAvis.length);

  // Ajout du clic sur chaque image
  imagesAvis.forEach(image => {

    image.addEventListener("click", () => {

      // Ouvre l’image dans un nouvel onglet
      window.open(image.src, "_blank");

    });

  });
}

// Lancement quand la page est chargée
document.addEventListener("DOMContentLoaded", zoomAvis);


