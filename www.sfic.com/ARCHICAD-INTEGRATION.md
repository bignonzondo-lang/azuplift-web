# Intégration AZUPLIFT Web ↔ Add-On Archicad

## Ce qui est livré côté Web

- `archicad/index.html` : route statique `/archicad/`, adaptée à une palette compacte.
- `assets/archicad-bridge.js` : façade isolée. Elle ne comporte ni API C++, ni WebSocket, ni port, ni endpoint inventé.
- `assets/archicad.js` : interface de catalogue, de projet, de quantités et retours utilisateur.
- `assets/archicad-models.d.ts` : modèles TypeScript `Product`, `BIMElement`, `Quantity`, `Project`, requête, réponse et interface `AzupliftApiClient`.

Le site public reste utilisable sans plugin. En l’absence d’adaptateur, il affiche « Mode Web » et les actions Archicad retournent un message clair.

## Contrat attendu de l’Add-On

Après validation avec le DevKit Archicad 29.3100, l’Add-On doit enregistrer son véritable adaptateur dans la page :

```js
window.AzupliftArchicadBridge.registerAdapter({
  request: async (request) => ({ success: true, action: '...' }),
  subscribe: (listener) => () => {}
});
```

`request` reçoit uniquement l’une de ces intentions Web : `ADD_PRODUCT`, `GET_SELECTED_ELEMENTS`, `GET_PROJECT_DATA`, `EXTRACT_QUANTITIES`, `SYNC_PROJECT`.

Pour l’ajout de produit, la requête contient un `productId` stable, par exemple `Furniture_Chairs_Stools_Benches_KOKUYO_Astrid_Lounge_Chair`. Les résultats doivent contenir au minimum `success` et `action`; `PRODUCT_ADDED` peut contenir `productId` et `elementGuid`. Les données de projet doivent suivre les modèles TypeScript fournis.

Le nom de cet adaptateur est un contrat AZUPLIFT à valider, et non la prétention qu’une API JavaScript Archicad existe déjà.

## API AZUPLIFT à définir côté serveur

Aucun appel API n’est fait par le site avant que le contrat serveur soit fourni. Les capacités nécessaires sont : authentification, lecture de produits et objets BIM, lecture/écriture de projets, envoi de quantités et synchronisation. Les chemins HTTP, schémas d’authentification et statuts restent à définir par l’API AZUPLIFT.

Variables de déploiement attendues côté serveur ou configuration injectée au build :

- `AZUPLIFT_API_BASE_URL`
- `AZUPLIFT_WEB_ORIGIN`
- `AZUPLIFT_OAUTH_CLIENT_ID` si l’authentification l’exige

Ne jamais exposer de secret ou de credential serveur dans les fichiers servis au navigateur.

## Déploiement

Déployer le dossier `www.sfic.com` en veillant à ce que la route de répertoire `/archicad/` serve `archicad/index.html`. La palette Archicad doit charger cette même URL. La route est autonome et n’ajoute aucune dépendance de build.

## À réaliser côté Add-On C++

1. Vérifier dans le DevKit 29.3100 le mécanisme officiel de navigateur embarqué et d’injection JavaScript.
2. Implémenter puis valider le transport qui répond au contrat d’adaptateur ci-dessus.
3. Mapper `ADD_PRODUCT` vers le téléchargement, chargement et insertion de l’objet BIM.
4. Lire les éléments et quantités de la maquette, puis retourner les modèles AZUPLIFT.
5. Gérer connexion, annulation, erreurs et synchronisation avec l’API côté serveur.
