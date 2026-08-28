# AZUPLIFT WebBridge 1.0

La palette HTTPS `/archicad/` utilise uniquement `window.AZUPLIFT_HOST.ExecuteCommand(requestJson)` fourni par l’Add-On Archicad 29.3100. Aucune API C++, WebSocket, port local ou réponse simulée n’est utilisée dans le site public.

## Enveloppe

Chaque requête contient `version: "1.0"`, un `requestId`, une `command` et un `payload`. Les commandes sont `GET_SELECTION`, `ANALYZE_PROJECT`, `ADD_PRODUCT`, `GET_PROJECT_DATA` et `SYNC_PROJECT`. La réponse est vérifiée : version, identifiant de requête, commande et succès doivent correspondre avant tout rendu.

`window.AZUPLIFT_UI.onSelectionChanged` est enregistré par le frontend puis déclenche, avec debounce, une nouvelle lecture `GET_SELECTION`.

## État actuel

- `GET_SELECTION`, `ANALYZE_PROJECT` et `GET_PROJECT_DATA` affichent seulement les données réellement renvoyées par l’Add-On.
- `ADD_PRODUCT` est désactivé publiquement : aucun GSM/Library Part et aucune correspondance vérifiée `productId → GSM` ne sont disponibles. Le C++ retourne actuellement `NOT_IMPLEMENTED` et le site ne le transforme jamais en succès.
- `SYNC_PROJECT` expose honnêtement `NOT_CONFIGURED` ou `NOT_IMPLEMENTED` jusqu’à la livraison de l’API AZUPLIFT.
- Produit de démonstration : `Furniture_Chairs_Stools_Benches_KOKUYO_Astrid_Lounge_Chair`.

## Limites serveur et sécurité

Il n’existe actuellement ni API catalogue/projet/quantités, ni authentification métier. Aucune clé ni secret n’est inclus côté navigateur. La future API devra être HTTPS, validée côté serveur, protégée par session `HttpOnly`/CSRF ou un mécanisme équivalent.

Les formats RFA, SKP, DWG et FBX restent téléchargeables depuis la fiche produit. Ils ne sont jamais envoyés au C++ comme s’il s’agissait d’un fichier GSM Archicad.
