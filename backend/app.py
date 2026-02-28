#  On importe Flask pour créer le serveur web
from flask import Flask, jsonify

# On importe CORS pour autoriser les requêtes venant de ton frontend (Go Live sur un autre port)
from flask_cors import CORS

# On crée l'application Flask
app = Flask(__name__)


# Cela permet au JS sur Go Live (port 5500) d'accéder à Flask (port 5000)
CORS(app)

#  On définit la liste des produits avec leur titre et prix
products = [
    {"title":"Fnac", "price":"15.50€"},
    {"title":"Amazon", "price":"15.95€"},
    {"title":"Magilano", "price":"14.90€"}
]

#  On crée une route Flask pour retourner le produit le moins cher
@app.route("/api/cheapest")
def cheapest():
    # Convertir chaque prix en float pour pouvoir comparer correctement
    # On enlève le "€" et on remplace les "," par "." si besoin
    for p in products:
        p["price_float"] = float(p["price"].replace("€","").replace(",","."))

    # On utilise min() pour trouver le produit avec le plus petit prix
    # key=lambda x: x["price_float"] compare chaque produit sur sa valeur numérique
    cheapest_product = min(products, key=lambda x: x["price_float"])

    # On renvoie le produit le moins cher sous forme JSON
    # jsonify transforme le dictionnaire Python en JSON utilisable par JS
    return jsonify({"title": cheapest_product["title"], "price": cheapest_product["price"]})

# Si on lance ce fichier directement, on démarre le serveur Flask
# Le serveur écoute sur http://127.0.0.1:5000
if __name__ == "__main__":
    app.run(debug=True, port=5000)