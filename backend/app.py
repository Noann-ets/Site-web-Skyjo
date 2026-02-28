from flask import Flask, jsonify
from flask_cors import CORS  # Pour autoriser le fetch depuis Go Live

app = Flask(__name__)
CORS(app)  # autoriser toutes les requêtes cross-origin

# Produits
products = [
    {"title":"Fnac", "price":"15.50€"},
    {"title":"Amazon", "price":"15.95€"},
    {"title":"Magilano", "price":"14.90€"}
]

# Route pour retourner le produit le moins cher
@app.route("/api/cheapest")
def cheapest():
    # Convertir les prix en float pour comparer
    for p in products:
        p["price_float"] = float(p["price"].replace("€","").replace(",","."))
    # Trouver le produit le moins cher
    cheapest_product = min(products, key=lambda x: x["price_float"])
    # Retourner JSON
    return jsonify({"title": cheapest_product["title"], "price": cheapest_product["price"]})

if __name__ == "__main__":
    app.run(debug=True, port=5000)