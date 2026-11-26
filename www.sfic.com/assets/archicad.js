/* Palette AZUPLIFT dans Archicad.
   Tous les résultats affichés viennent du pont AZUPLIFT_HOST (archicad-bridge.js). Aucune réponse n'est simulée. */
document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const bridge = window.AzupliftArchicadBridge;
  const { $, $$, esc, fcfa, Cart, Store } = window.AZU;
  const VUES = ['accueil', 'catalogue', 'objets', 'projet', 'quantites', 'synchronisation'];
  let quantitesCommerciales = [];
  let connecte = false;

  /* Messages lisibles pour les codes du contrat WebBridge 1.0 */
  const MESSAGES = {
    ARCHICAD_BRIDGE_UNAVAILABLE: 'Ouvrez cette palette dans Archicad pour utiliser cette fonction.',
    PLACEMENT_CANCELLED: 'Placement annulé. Aucun objet n’a été créé.',
    PRODUCT_NOT_MAPPED: 'Ce produit n’a pas encore d’objet Archicad vérifié.',
    PRODUCT_LIBRARY_MISSING: 'La bibliothèque AZUPLIFT est introuvable. Réinstallez l’extension.',
    ARCHICAD_LIBRARY_ERROR: 'Archicad n’a pas pu charger la bibliothèque AZUPLIFT.',
    NOT_CONFIGURED: 'Le serveur AZUPLIFT n’est pas encore en service. Aucune donnée n’a été envoyée.',
    NOT_IMPLEMENTED: 'Cette fonction arrive avec le serveur AZUPLIFT. Aucune donnée n’a été envoyée.'
  };
  const texteErreur = (e) => MESSAGES[e.code] || `${e.message || 'Erreur Archicad.'} (code ${e.code || 'ARCHICAD_ERROR'})`;
  const message = (t, type = '') => { const m = $('[data-archicad-feedback]'); m.textContent = t; m.className = `pal-message ${type}`; };

  /* Onglets */
  const afficher = () => {
    const v = VUES.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'accueil';
    VUES.forEach((id) => { $('#' + id).hidden = id !== v; });
    $$('.pal-onglets a').forEach((a) => a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + v));
    if (v === 'accueil') majAccueil();
  };
  window.addEventListener('hashchange', afficher);

  /* Accueil */
  const majAccueil = () => {
    const n = Cart.count();
    $('[data-pal-panier]').textContent = `${n} ${n > 1 ? 'articles' : 'article'}`;
    const u = Store.user();
    const o = u && Store.org(u.org);
    $('[data-compte]').innerHTML = u
      ? `Connecté à AZUPLIFT en tant que <b>${esc(u.nom)}</b>, ${esc(o ? o.nom : '')}. <a href="/espace" target="_blank" rel="noopener">Mon espace</a>`
      : `Connectez vous à AZUPLIFT pour rattacher vos quantités à un projet. <a href="/connexion?retour=/archicad/">Se connecter</a>`;
  };

  /* Catalogue */
  let filtre = '';
  const produits = () => window.AZU.catalogue().slice().sort((a, b) => (b.archicad - a.archicad) || (b.bim.length - a.bim.length));
  $('[data-filtres]').innerHTML = [['', 'Tout'], ['bim', 'Objet Archicad'], ...window.AZU.UNIVERS.map((u) => [u.id, u.nom])]
    .map(([k, t]) => `<button type="button" data-f="${k}" aria-pressed="${k === ''}">${t}</button>`).join('');
  $$('[data-f]').forEach((b) => b.addEventListener('click', () => { filtre = b.dataset.f; $$('[data-f]').forEach((x) => x.setAttribute('aria-pressed', x === b)); rendreCatalogue(); }));
  const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const rendreCatalogue = () => {
    const q = norm($('#archicad-query').value.trim());
    const l = produits().filter((p) => (!filtre || (filtre === 'bim' ? p.archicad : p.univers === filtre)) &&
      (!q || norm([p.nom, p.desc, p.fabricant || '', window.AZU.univers(p.univers).nom].join(' ')).includes(q)));
    $('#archicad-search-result').textContent = `${l.length} ${l.length > 1 ? 'produits' : 'produit'}${l.filter((p) => p.archicad).length ? `, dont ${l.filter((p) => p.archicad).length} plaçable dans Archicad` : ''}`;
    $('[data-pal-catalogue]').innerHTML = l.length ? l.map((p) => `
      <article class="pal-produit ${p.archicad ? 'est-bim' : ''}">
        <div class="pal-produit-visuel">${window.AZU.visuel(p)}</div>
        <div><span class="pal-petit">${esc(window.AZU.univers(p.univers).nom)}${p.fabricant ? `, ${esc(p.fabricant)}` : ''}</span><h3>${esc(p.nom)}</h3>
          <span class="pal-petit">${p.archicad ? 'Objet Archicad vérifié' : 'Objet BIM en préparation'}, ${p.offres.length} ${p.offres.length > 1 ? 'offres' : 'offre'}</span></div>
        <div class="pal-produit-bas"><span class="pal-prix">${fcfa(window.AZU.meilleurPrix(p))} <span class="pal-petit" style="display:inline">HT par ${esc(p.unite)}</span></span>
          ${p.archicad
            ? `<button class="pal-btn pal-btn-chantier" type="button" data-add-product="${esc(p.id)}">Ajouter à Archicad</button>`
            : `<button class="pal-btn pal-btn-trait" type="button" data-panier="${esc(p.id)}">Ajouter au panier</button>`}
        </div>
      </article>`).join('') : '<div class="pal-vide">Aucun produit ne correspond. Essayez un terme plus général.</div>';
    $$('[data-add-product]').forEach((b) => b.addEventListener('click', () => placer(b)));
    $$('[data-panier]').forEach((b) => b.addEventListener('click', () => { Cart.add(b.dataset.panier, 1); b.textContent = 'Ajouté au panier'; b.disabled = true; majAccueil(); }));
  };
  $('#archicad-query').addEventListener('input', rendreCatalogue);
  $('#archicad-search').addEventListener('submit', (e) => { e.preventDefault(); rendreCatalogue(); });

  const retour = (t, type) => { const r = $('[data-product-feedback]'); r.hidden = false; r.textContent = t; r.className = `pal-retour ${type}`; };
  const placer = async (b) => {
    const nom = (window.AZU.produit(b.dataset.addProduct) || {}).nom || 'Produit';
    b.disabled = true; b.dataset.busy = ''; const t = b.textContent; b.textContent = 'Placement';
    retour(`Cliquez un point sur le plan Archicad pour placer ${nom}. Échap annule.`, 'is-pending');
    try {
      const data = await bridge.addProductToArchicad(b.dataset.addProduct);
      retour(`${nom} placé dans la maquette. Identifiant Archicad ${data.elementGuid}.`, 'is-success');
      message('Objet créé dans Archicad.', 'is-success');
    } catch (e) { retour(texteErreur(e), 'is-error'); message(texteErreur(e), 'is-error'); }
    finally { b.disabled = false; delete b.dataset.busy; b.textContent = t; }
  };

  /* Rendu des réponses Archicad */
  const TYPES = { Wall: 'Murs', Slab: 'Dalles', Door: 'Portes', Window: 'Fenêtres', Object: 'Objets', Column: 'Poteaux', Beam: 'Poutres', Roof: 'Toitures', Stair: 'Escaliers', Zone: 'Zones', Railing: 'Garde corps', CurtainWall: 'Murs rideaux', 'Curtain Wall': 'Murs rideaux', Lamp: 'Luminaires', Mesh: 'Maillages', Shell: 'Coques', Morph: 'Formes libres', Skylight: 'Lanterneaux', Opening: 'Ouvertures' };
  const typeFr = (t) => TYPES[t] || t;
  const nomProduit = (id) => { const p = window.AZU.produit(id); return p ? p.nom : id; };
  const rendreSelection = (d) => {
    const o = $('[data-selection-output]');
    if (!d.count) { o.innerHTML = `<div class="pal-vide">Aucun objet AZUPLIFT dans la sélection. ${d.selectedCount || 0} ${d.selectedCount > 1 ? 'éléments sélectionnés' : 'élément sélectionné'} au total.</div>`; return; }
    o.innerHTML = `<div class="pal-liste">${d.elements.map((e) => `<div class="pal-ligne"><b>${esc(nomProduit(e.productId))}</b><span class="pal-petit" style="grid-column:auto">${esc(typeFr(e.type))}</span><span class="pal-petit">${esc(e.elementId || e.guid)}</span></div>`).join('')}</div>
      <p class="pal-info">${d.count} ${d.count > 1 ? 'objets AZUPLIFT' : 'objet AZUPLIFT'} sur ${d.selectedCount} ${d.selectedCount > 1 ? 'éléments sélectionnés' : 'élément sélectionné'}.</p>`;
  };
  const rendreProjet = (d) => {
    const parType = {};
    (d.elements || []).forEach((e) => { parType[e.type] = (parType[e.type] || 0) + 1; });
    const l = Object.entries(parType).sort((a, b) => b[1] - a[1]);
    const max = l.length ? l[0][1] : 1;
    const az = (d.elements || []).filter((e) => e.productId).length;
    if (d.project && d.project.name) $('[data-project-name]').textContent = d.project.name;
    $('[data-project-output]').innerHTML = `<p class="pal-info">${esc(d.project ? d.project.name : 'Projet')}, ${d.returned} ${d.returned > 1 ? 'éléments lus' : 'élément lu'} sur ${d.totalAvailable}${d.truncated ? ', liste limitée' : ''}. ${az} ${az > 1 ? 'objets AZUPLIFT' : 'objet AZUPLIFT'}.</p>
      ${l.length ? `<div class="pal-liste">${l.map(([t, n]) => `<div class="pal-ligne"><b>${esc(typeFr(t))}</b><span class="pal-qte">${n}</span><div class="pal-barre"><span style="width:${Math.round(n / max * 100)}%"></span></div></div>`).join('')}</div>` : '<div class="pal-vide">La maquette ne contient aucun élément.</div>'}`;
  };
  const rendreAnalyse = (d) => {
    if (d.project && d.project.name) $('[data-project-name]').textContent = d.project.name;
    const q = (d.quantities || []).filter((x) => Number.isInteger(x.quantity) && x.quantity > 0);
    quantitesCommerciales = q.filter((x) => window.AZU.produit(x.productId));
    $('[data-analysis-output]').textContent = `${d.project ? d.project.name : 'Projet'}, ${d.totalAzupliftElements || 0} ${(d.totalAzupliftElements || 0) > 1 ? 'objets AZUPLIFT' : 'objet AZUPLIFT'} sur ${d.totalElements || 0} éléments de la maquette.`;
    let total = 0;
    $('[data-quantities-output]').innerHTML = q.length ? `<div class="pal-liste">${q.map((x) => {
      const p = window.AZU.produit(x.productId);
      const est = p ? window.AZU.meilleurPrix(p) * x.quantity : 0; total += est;
      return `<div class="pal-ligne"><b>${esc(p ? p.nom : (x.name || x.productId))}</b><span class="pal-qte">${x.quantity} <small>${esc(x.unit || '')}</small></span><span class="pal-petit">${p ? `Estimation ${fcfa(est)} HT au meilleur prix` : 'Produit absent du catalogue, non chiffré'}</span></div>`;
    }).join('')}</div>` : '<div class="pal-vide">Aucun objet AZUPLIFT dans la maquette. Placez un produit depuis le catalogue.</div>';
    const t = $('[data-quantities-total]');
    t.hidden = !total; t.innerHTML = `<small>Estimation du projet</small><b>${fcfa(total)} HT</b>`;
    $('[data-send-cart]').disabled = !quantitesCommerciales.length;
  };

  /* Commandes */
  const lancer = async (b, cmd) => {
    b.disabled = true; b.dataset.busy = '';
    try {
      const d = await bridge.executeArchicadCommand(cmd, cmd === 'GET_PROJECT_DATA' ? { maxElements: 500, includeClassifications: false, includeProperties: false } : {});
      if (cmd === 'GET_SELECTION') rendreSelection(d);
      if (cmd === 'ANALYZE_PROJECT') rendreAnalyse(d);
      if (cmd === 'GET_PROJECT_DATA') rendreProjet(d);
      if (cmd === 'SYNC_PROJECT') $('[data-sync-output]').innerHTML = '<div class="pal-retour is-success">Projet synchronisé.</div>';
      message('Réponse reçue d’Archicad.', 'is-success');
    } catch (e) {
      if (cmd === 'SYNC_PROJECT') $('[data-sync-output]').innerHTML = `<div class="pal-retour is-error">${esc(texteErreur(e))}</div>`;
      message(texteErreur(e), 'is-error');
    } finally { b.disabled = false; delete b.dataset.busy; }
  };
  $$('[data-command]').forEach((b) => b.addEventListener('click', () => lancer(b, b.dataset.command)));
  $('[data-go-analyse]').addEventListener('click', () => { location.hash = '#quantites'; lancer($('[data-command="ANALYZE_PROJECT"]'), 'ANALYZE_PROJECT'); });

  $('[data-send-cart]').addEventListener('click', () => {
    const c = Cart.read();
    c.items = c.items.filter((it) => it.source !== 'Archicad' && !it.supplier);
    quantitesCommerciales.forEach((x) => {
      const p = window.AZU.produit(x.productId);
      const f = p.offres.slice().sort((a, b) => a.prix - b.prix)[0].f;
      c.items.push({ productId: x.productId, quantity: x.quantity, fournisseur: f, source: 'Archicad' });
    });
    Cart.write(c);
    message('Quantités de la maquette envoyées au panier.', 'is-success');
    location.href = '/panier';
  });

  /* Sélection en direct */
  let minuteur;
  window.addEventListener('azuplift:selection-changed', () => {
    clearTimeout(minuteur);
    minuteur = setTimeout(() => { const b = $('[data-command="GET_SELECTION"]'); if (b && !b.disabled) lancer(b, 'GET_SELECTION'); }, 180);
  });

  rendreCatalogue();
  afficher();

  /* Connexion au pont */
  bridge.onStateChange(({ available }) => {
    const ind = $('[data-connection-state]');
    ind.dataset.state = available ? 'ARCHICAD_CONNECTED' : 'WEB_ONLY';
    ind.querySelector('span').textContent = available ? 'Archicad connecté' : 'Hors Archicad';
    $('[data-home-status]').textContent = available
      ? 'La palette est reliée à votre maquette.'
      : 'Ouvrez cette palette dans Archicad pour lire la maquette.';
    if (available && !connecte) {
      connecte = true;
      bridge.analyzeProject().then(rendreAnalyse).catch(() => {});
    }
  });
});
