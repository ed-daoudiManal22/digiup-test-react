# Documentation du Challenge : Boutique en Ligne

Le comportement attendu de l'application est de récupérer un nombre spécifié de produits, défini par l'utilisateur, en appliquant des filtres de prix minimum et maximum en utilisant le site [Fake Store API](https://fakestoreapi.com/docs).

Veuillez noter qu'il n'y a pas d'endpoint spécifique pour les filtres de prix, vous devrez donc les implémenter manuellement en utilisant JavaScript.

## 1. Gestion des Erreurs du Formulaire de Recherche

- Le nombre de produits saisi ne doit pas être inférieur ou égal à 0.
- Les prix minimum et maximum saisis ne doivent pas être inférieurs à 0.
- Le prix maximum saisi ne doit pas être inférieur au prix minimum saisi.
- L'utilisateur doit saisir uniquement des chiffres dans les champs de texte (nombre de produits, prix minimum, prix maximum).
- Afficher les messages d'erreur en utilisant la bibliothèque "react-hot-toast" déjà configurée dans le projet.

## 2. Création des Composants

- Créez un composant de bouton pour l'incrémentation et la décrémentation des prix pour remplacer le code existant dans "FormulaireRecherche".
- Créez un composant "ProduitItem" pour afficher chaque produit individuellement dans le composant "Produits".

## 3. Configuration du Routing React (Navigation)

- Ajoutez une page et configurez son routing dans React pour afficher individuellement un produit après que l'utilisateur a choisi un produit dans la boutique. Dans cette page, récupérez le produit depuis l'API du site [Fake Store API](https://fakestoreapi.com/docs) en utilisant la bibliothèque axios déjà configurée dans le projet.

Veuillez noter que la configuration du routing est déja configuré dans le projet, vous devez juste ajouter la configuration de la page que vous avez crée.

## 4. Fonctionnalités à Implémenter

- Ajoutez la fonctionnalité de tri des prix par ordre croissant et décroissant des produits sans faire appel aux APIs, juste en utilisant du code JavaScript.
- Ajoutez un message "Chargement..." et affichez-le à l'utilisateur lorsque vous attendez une réponse depuis les APIs du site [Fake Store API](https://fakestoreapi.com/docs).

## 5. Typescript

- Ajoutez un type : `ProduitType` qui correspond au produit que vous récupérez depuis [Fake Store API](https://fakestoreapi.com/docs).

## 6. Notes Importantes

- Aucun code d'erreur ne doit être trouvé dans la console du navigateur que vous utilisez.
- Il n'existe pas d'API pour récupérer les produits en spécifiant les prix, vous devez filtrer les prix des produits avec du JavaScript.

## Exemple de Solution Attendue

Pour vous aider à comprendre la solution attendue, nous avons préparé un exemple que vous pouvez consulter. [Cliquez ici pour voir l'exemple de solution](https://digiup-challenge.vercel.app).
