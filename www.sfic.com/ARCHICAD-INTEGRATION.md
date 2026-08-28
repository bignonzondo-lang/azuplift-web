# AZUPLIFT WebBridge 1.0

La palette HTTPS `/archicad/` utilise uniquement `window.AZUPLIFT_HOST.ExecuteCommand(requestJson)` fourni par l’Add-On Archicad 29.3100. Aucune API C++, WebSocket, port local ou réponse simulée n’est utilisée dans le site public.

## Enveloppe

Chaque requête contient `version: "1.0"`, un `requestId`, une `command` et un `payload`. Les commandes sont `GET_SELECTION`, `ANALYZE_PROJECT`, `ADD_PRODUCT`, `GET_PROJECT_DATA` et `SYNC_PROJECT`. La réponse est vérifiée : version, identifiant de requête, commande et succès doivent correspondre avant tout rendu.

`window.AZUPLIFT_UI.onSelectionChanged` est enregistré par le frontend puis déclenche, avec debounce, une nouvelle lecture `GET_SELECTION`.

## État actuel

- `GET_SELECTION` utilise le scope `AZUPLIFT` par défaut : « Mes objets » exclut les éléments sans marqueur `productId` AZUPLIFT.
- `ANALYZE_PROJECT` affiche le quantitatif commercial par `productId`. Le comptage technique de toute la maquette reste disponible séparément dans `modelQuantities`.
- `GET_PROJECT_DATA` reste l’extraction générale de la maquette.
- `ADD_PRODUCT` est actif pour `Furniture_Chairs_Stools_Benches_KOKUYO_Astrid_Lounge_Chair`. Le C++ résout le GSM livré avec l’Add-On, demande un point réel dans la maquette, crée l’objet et écrit la propriété `AZUPLIFT / Product ID`.
- `SYNC_PROJECT` expose honnêtement `NOT_CONFIGURED` ou `NOT_IMPLEMENTED` jusqu’à la livraison de l’API AZUPLIFT.
- Produit de démonstration : `Furniture_Chairs_Stools_Benches_KOKUYO_Astrid_Lounge_Chair`.

## Limites serveur et sécurité

Il n’existe actuellement ni API catalogue/projet/quantités, ni authentification métier. Aucune clé ni secret n’est inclus côté navigateur. La future API devra être HTTPS, validée côté serveur, protégée par session `HttpOnly`/CSRF ou un mécanisme équivalent.

Les formats RFA, SKP, DWG et FBX restent téléchargeables depuis la fiche produit. Ils ne sont jamais envoyés au C++ comme s’il s’agissait d’un fichier GSM Archicad. Le GSM Astrid est distribué avec l’APX pour la démonstration.

## Achats

Le paiement ne doit pas être exécuté par l’APX. Le futur parcours est : analyse locale → envoi HTTPS des lignes `{ productId, quantity, unit }` → panier/devis côté serveur → paiement sur le site principal. Les routes, l’authentification et le mapping vers un article vendable restent à fournir par le backend ; aucun faux panier n’est actuellement présenté.
