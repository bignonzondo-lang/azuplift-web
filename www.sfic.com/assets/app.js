/* AZUPLIFT, socle commun : catalogue, comptes, devis, commandes, panier.
   Version de démonstration. Toutes les données vivent dans le navigateur (localStorage).
   Le jour où l'API serveur existe, seules les fonctions de Store sont à remplacer. */
(function(){
'use strict';

const ASTRID_ID='Furniture_Chairs_Stools_Benches_KOKUYO_Astrid_Lounge_Chair';
const CART_KEY='azuplift-demo-cart-v1';      // partagé avec la palette Archicad (site.js, archicad.js)
const STATE_KEY='azuplift-demo-state-v2';

/* Univers produits */
const UNIVERS=[
  {id:'platrerie',nom:'Plâtrerie',desc:'Plaques, ossatures et enduits pour cloisons et doublages.'},
  {id:'isolation',nom:'Isolation',desc:'Isolants thermiques et acoustiques pour murs et toitures.'},
  {id:'plafonds',nom:'Plafonds',desc:'Dalles, ossatures et plafonds suspendus.'},
  {id:'etancheite',nom:'Étanchéité',desc:'Membranes, primaires et protections de toitures terrasses.'},
  {id:'calorifuge',nom:'Calorifuge',desc:'Isolation des réseaux et des gaines techniques.'},
  {id:'outillage',nom:'Outillage',desc:'Outils de pose et de finition pour les équipes.'},
  {id:'mobilier',nom:'Mobilier',desc:'Mobilier pour bureaux, halls et espaces de vie.'}
];

/* Fournisseurs de démonstration */
const FOURNISSEURS=[
  {id:'f-cotonou',nom:'Dépôt démo Cotonou',ville:'Cotonou',delai:'24 à 48 h'},
  {id:'f-parakou',nom:'Dépôt démo Parakou',ville:'Parakou',delai:'3 à 5 jours'},
  {id:'f-bohicon',nom:'Dépôt démo Bohicon',ville:'Bohicon',delai:'2 à 3 jours'}
];

/* Catalogue de démonstration. Seule l'Astrid possède de vrais fichiers BIM et un placement Archicad vérifié. */
const P=(id,nom,univers,unite,prix,offres,specs,desc,extra={})=>({id,nom,univers,unite,prix,offres,specs,desc,bim:[],archicad:false,...extra});
const CATALOGUE=[
  P(ASTRID_ID,'Astrid Lounge Chair','mobilier','U',185000,
    [{f:'f-cotonou',prix:185000,stock:12},{f:'f-bohicon',prix:189000,stock:4}],
    [['Fabricant','KOKUYO TH'],['Dimensions','850 × 770 × 820 mm'],['Usage','Halls, salons, espaces d’attente'],['Référence BIM',ASTRID_ID]],
    'Fauteuil lounge à coque enveloppante et piétement métal fin. Objet BIM complet, plaçable directement dans votre maquette Archicad depuis la palette AZUPLIFT.',
    {fabricant:'KOKUYO TH',image:'/assets/astrid-lounge-chair-1.png',dims:[850,770,820],archicad:true,
     bim:[{f:'GSM',note:'Archicad, installé avec l’extension'},{f:'RFA',url:'/bim/astrid/astrid-lounge-chair.rfa',note:'Revit'},{f:'SKP',url:'/bim/astrid/astrid-lounge-chair.skp',note:'SketchUp'},{f:'DWG',url:'/bim/astrid/astrid-lounge-chair.dwg',note:'AutoCAD'},{f:'FBX',url:'/bim/astrid/astrid-lounge-chair.fbx',note:'Visualisation 3D'}]}),
  P('platre-ba13-std','Plaque de plâtre standard BA13','platrerie','U',5200,
    [{f:'f-cotonou',prix:5200,stock:1800},{f:'f-parakou',prix:5450,stock:600},{f:'f-bohicon',prix:5300,stock:420}],
    [['Format','2500 × 1200 mm'],['Épaisseur','12,5 mm'],['Bords','Amincis'],['Usage','Cloisons et doublages en locaux secs']],
    'La plaque de base des cloisons sèches. Vendue à l’unité, livrée sur palette de 50 plaques.'),
  P('platre-ba13-hydro','Plaque de plâtre hydrofuge BA13','platrerie','U',7400,
    [{f:'f-cotonou',prix:7400,stock:640},{f:'f-bohicon',prix:7600,stock:120}],
    [['Format','2500 × 1200 mm'],['Épaisseur','12,5 mm'],['Usage','Salles d’eau, cuisines']],
    'Plaque traitée contre l’humidité pour les pièces humides et les façades intérieures exposées.'),
  P('rail-r48','Rail métallique R48','platrerie','U',2100,
    [{f:'f-cotonou',prix:2100,stock:2400},{f:'f-parakou',prix:2200,stock:900}],
    [['Longueur','3 m'],['Largeur','48 mm'],['Acier','Galvanisé']],
    'Rail de sol et de plafond pour ossatures de cloisons en plaques de plâtre.'),
  P('montant-m48','Montant métallique M48','platrerie','U',2600,
    [{f:'f-cotonou',prix:2600,stock:2100},{f:'f-parakou',prix:2700,stock:700},{f:'f-bohicon',prix:2650,stock:300}],
    [['Longueur','3 m'],['Largeur','48 mm'],['Acier','Galvanisé']],
    'Montant vertical à emboîter dans le rail R48, entraxe conseillé de 60 cm.'),
  P('enduit-joint','Enduit à joint prêt à l’emploi 25 kg','platrerie','U',14500,
    [{f:'f-cotonou',prix:14500,stock:310}],
    [['Conditionnement','Seau de 25 kg'],['Rendement','Environ 0,35 kg par m²']],
    'Enduit pour bandes et finitions de cloisons, application manuelle ou mécanique.'),
  P('laine-verre-100','Rouleau de laine de verre 100 mm','isolation','m²',3900,
    [{f:'f-cotonou',prix:3900,stock:1500},{f:'f-parakou',prix:4100,stock:800}],
    [['Épaisseur','100 mm'],['Résistance thermique','R 2,5'],['Usage','Combles et rampants']],
    'Isolant léger en rouleau, efficace contre la chaleur sous toiture et contre le bruit.'),
  P('panneau-pse-50','Panneau polystyrène expansé 50 mm','isolation','m²',3100,
    [{f:'f-cotonou',prix:3100,stock:900},{f:'f-bohicon',prix:3250,stock:260}],
    [['Format','1200 × 600 mm'],['Épaisseur','50 mm'],['Usage','Doublage de murs et dalles']],
    'Panneau rigide pour l’isolation des murs par l’intérieur et des planchers.'),
  P('dalle-600','Dalle de plafond minérale 600 × 600','plafonds','m²',6800,
    [{f:'f-cotonou',prix:6800,stock:700},{f:'f-parakou',prix:7100,stock:200}],
    [['Format','600 × 600 mm'],['Épaisseur','15 mm'],['Bord','Droit'],['Usage','Bureaux et commerces']],
    'Dalle acoustique blanche pour plafonds suspendus, compatible ossature T24.'),
  P('ossature-t24','Ossature de plafond T24, porteur 3,6 m','plafonds','U',3400,
    [{f:'f-cotonou',prix:3400,stock:1100}],
    [['Longueur','3,6 m'],['Profil','T24'],['Finition','Laquée blanche']],
    'Profil porteur pour plafonds suspendus à dalles de 600 mm.'),
  P('membrane-bitume','Membrane bitumineuse SBS 4 mm','etancheite','m²',8900,
    [{f:'f-cotonou',prix:8900,stock:520},{f:'f-bohicon',prix:9200,stock:140}],
    [['Épaisseur','4 mm'],['Rouleau','10 m²'],['Pose','Au chalumeau'],['Usage','Toitures terrasses']],
    'Membrane d’étanchéité élastomère pour toitures terrasses exposées aux fortes pluies.'),
  P('primaire-bitume','Primaire d’accrochage bitumineux 20 L','etancheite','U',36000,
    [{f:'f-cotonou',prix:36000,stock:80}],
    [['Conditionnement','Bidon de 20 L'],['Rendement','Environ 0,3 L par m²']],
    'Primaire à appliquer sur le support avant la pose des membranes.'),
  P('manchon-calorifuge','Manchon isolant pour tuyauterie 22 mm','calorifuge','ml',1800,
    [{f:'f-cotonou',prix:1800,stock:1400},{f:'f-parakou',prix:1900,stock:300}],
    [['Diamètre intérieur','22 mm'],['Épaisseur','13 mm'],['Usage','Eau glacée et climatisation']],
    'Isolation des réseaux de climatisation, limite la condensation et les pertes.'),
  P('visseuse-placo','Visseuse plaquiste sans fil','outillage','U',96000,
    [{f:'f-cotonou',prix:96000,stock:18}],
    [['Batterie','18 V'],['Butée','Réglable en profondeur']],
    'Visseuse dédiée à la pose de plaques, livrée avec deux batteries et un chargeur.'),
  P('niveau-laser','Niveau laser à lignes croisées','outillage','U',74000,
    [{f:'f-cotonou',prix:74000,stock:9},{f:'f-bohicon',prix:76000,stock:3}],
    [['Portée','20 m'],['Précision','0,3 mm par m']],
    'Pour tracer rails, plafonds et alignements de façon fiable.')
];

/* Illustrations techniques des univers (traits de plan, aucune image externe) */
const ILLUS={
  platrerie:'<path d="M20 70 L60 50 L110 75 L70 95 Z M20 78 L70 103 L110 83 M20 70 L20 78 M70 95 L70 103 M110 75 L110 83 M20 62 L60 42 L110 67 L70 87 Z M20 62 L20 70 M110 67 L110 75"/>',
  isolation:'<ellipse cx="40" cy="65" rx="18" ry="26"/><ellipse cx="40" cy="65" rx="8" ry="12"/><path d="M40 39 L100 39 Q118 39 118 65 Q118 91 100 91 L40 91"/><path d="M58 39 Q66 65 58 91 M76 39 Q84 65 76 91 M94 39 Q102 65 94 91" stroke-dasharray="3 4"/>',
  plafonds:'<path d="M15 40 L115 40 L115 100 L15 100 Z M48 40 L48 100 M82 40 L82 100 M15 70 L115 70"/><path d="M15 30 L115 30 M30 30 L30 40 M65 30 L65 40 M100 30 L100 40" stroke-dasharray="2 3"/>',
  etancheite:'<ellipse cx="96" cy="58" rx="14" ry="20"/><path d="M96 38 L30 38 L14 84 L82 84 Q96 84 96 78"/><path d="M30 38 L22 62 M50 38 L40 84 M70 38 L60 84" stroke-dasharray="3 4"/>',
  calorifuge:'<path d="M10 55 L120 55 M10 75 L120 75"/><path d="M30 45 L95 45 L95 85 L30 85 Z"/><ellipse cx="30" cy="65" rx="6" ry="20"/><path d="M45 45 L45 85 M60 45 L60 85 M75 45 L75 85" stroke-dasharray="2 4"/>',
  outillage:'<path d="M20 90 L95 90 L95 70 L20 70 Z M30 80 L40 80 M50 80 L60 80 M70 80 L85 80"/><path d="M55 70 L55 35 L80 35 M70 28 L90 28 L90 42 L70 42 Z"/>',
  mobilier:'<path d="M30 60 Q30 30 65 30 Q100 30 100 60 L100 75 L30 75 Z M38 75 L32 100 M92 75 L98 100"/>'
};
function illustration(univers){
  return `<svg class="illus" viewBox="0 0 130 120" fill="none" stroke="#2747A8" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true">${ILLUS[univers]||ILLUS.platrerie}</svg>`;
}

/* Utilitaires */
const fcfa=n=>`${Math.round(n).toLocaleString('fr-FR')} FCFA`;
const dateFr=t=>new Date(t).toLocaleDateString('fr-FR',{day:'numeric',month:'short',year:'numeric'});
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=p=>`${p}${String(Date.now()%100000).padStart(5,'0')}`;
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const params=()=>new URLSearchParams(location.search);

/* Données initiales */
function seed(){
  const now=Date.now(),j=86400000;
  return {
    version:2,
    orgs:[
      {id:'o-archi',nom:'Atelier démo d’architecture',type:'entreprise',metier:'Cabinet d’architecture',ville:'Cotonou',statut:'validée',creee:now-40*j},
      {id:'o-btp',nom:'Entreprise démo BTP',type:'entreprise',metier:'Entreprise générale',ville:'Cotonou',statut:'validée',creee:now-90*j,paiement30:true},
      {id:'f-cotonou',nom:'Dépôt démo Cotonou',type:'fournisseur',metier:'Distributeur',ville:'Cotonou',statut:'validée',creee:now-120*j},
      {id:'f-parakou',nom:'Dépôt démo Parakou',type:'fournisseur',metier:'Distributeur',ville:'Parakou',statut:'validée',creee:now-100*j},
      {id:'f-bohicon',nom:'Dépôt démo Bohicon',type:'fournisseur',metier:'Distributeur',ville:'Bohicon',statut:'validée',creee:now-60*j},
      {id:'o-nouvelle',nom:'Menuiserie démo Ouidah',type:'entreprise',metier:'Second œuvre',ville:'Ouidah',statut:'en attente',creee:now-1*j},
      {id:'o-azuplift',nom:'AZUPLIFT',type:'plateforme',metier:'Équipe plateforme',ville:'Cotonou',statut:'validée',creee:now-200*j}
    ],
    users:[
      {id:'u-archi',nom:'Architecte démo',email:'architecte@demo.azuplift',org:'o-archi',role:'architecte'},
      {id:'u-acheteur',nom:'Acheteur démo',email:'achats@demo.azuplift',org:'o-btp',role:'acheteur'},
      {id:'u-chef',nom:'Chef de chantier démo',email:'chantier@demo.azuplift',org:'o-btp',role:'chantier'},
      {id:'u-dirbtp',nom:'Direction démo BTP',email:'direction@demo.azuplift',org:'o-btp',role:'admin'},
      {id:'u-fourn',nom:'Commercial démo Cotonou',email:'ventes@demo.azuplift',org:'f-cotonou',role:'fournisseur'},
      {id:'u-admin',nom:'Équipe AZUPLIFT',email:'equipe@demo.azuplift',org:'o-azuplift',role:'plateforme'}
    ],
    session:null,
    projets:[
      {id:'PRJFIDJ',org:'o-btp',nom:'Résidence démo Fidjrossè',ville:'Cotonou',lignes:[{p:'platre-ba13-std',q:420},{p:'montant-m48',q:310},{p:'rail-r48',q:140},{p:'laine-verre-100',q:380}],source:'Saisie manuelle',creee:now-20*j},
      {id:'PRJHALL',org:'o-archi',nom:'Hall démo d’accueil',ville:'Porto Novo',lignes:[{p:ASTRID_ID,q:6}],source:'Saisie manuelle',creee:now-6*j}
    ],
    devis:[
      {id:'DEV1042',org:'o-btp',user:'u-acheteur',fournisseur:'f-cotonou',projet:'PRJFIDJ',lignes:[{p:'membrane-bitume',q:260},{p:'primaire-bitume',q:4}],message:'Livraison souhaitée sur chantier en une seule fois.',statut:'envoyée',creee:now-2*j}
    ],
    commandes:[
      {id:'CMD2207',org:'o-btp',user:'u-acheteur',fournisseur:'f-cotonou',projet:'PRJFIDJ',lignes:[{p:'platre-ba13-std',q:200,prix:5200},{p:'rail-r48',q:80,prix:2100}],livraison:15000,adresse:'Chantier Fidjrossè, Cotonou',paiement:'Paiement à 30 jours',statut:3,creee:now-12*j},
      {id:'CMD2231',org:'o-btp',user:'u-acheteur',fournisseur:'f-cotonou',projet:'PRJFIDJ',lignes:[{p:'laine-verre-100',q:180,prix:3900}],livraison:10000,adresse:'Chantier Fidjrossè, Cotonou',paiement:'Paiement mobile',statut:1,creee:now-1*j}
    ],
    produitsFournisseurs:[
      {id:'PF-ciment-cpj',nom:'Ciment CPJ 42,5 sac de 50 kg',univers:'platrerie',unite:'U',prix:5600,fournisseur:'f-cotonou',stock:2000,desc:'Proposé par le Dépôt démo Cotonou.',statut:'en attente',creee:now-1*j}
    ],
    messages:[]
  };
}

const STATUTS_CMD=['Confirmée','En préparation','Expédiée','Livrée'];
const ROLES={architecte:'Architecte',acheteur:'Acheteur',chantier:'Chef de chantier',admin:'Administrateur entreprise',fournisseur:'Fournisseur',plateforme:'Équipe AZUPLIFT'};

/* Stockage */
const Store={
  get(){try{const s=JSON.parse(localStorage.getItem(STATE_KEY));if(s&&s.version===2)return s}catch(e){}const s=seed();this.set(s);return s},
  set(s){try{localStorage.setItem(STATE_KEY,JSON.stringify(s))}catch(e){}},
  update(fn){const s=this.get();fn(s);this.set(s);return s},
  reset(){localStorage.removeItem(STATE_KEY);localStorage.removeItem(CART_KEY);},
  user(){const s=this.get();return s.users.find(u=>u.id===s.session)||null},
  org(id){return this.get().orgs.find(o=>o.id===id)||null},
  login(id){this.update(s=>{s.session=id})},
  logout(){this.update(s=>{s.session=null})}
};

/* Catalogue complet = catalogue de base + produits fournisseurs publiés */
function catalogue(){
  const s=Store.get();
  const ajouts=s.produitsFournisseurs.filter(p=>p.statut==='publié').map(p=>({
    id:p.id,nom:p.nom,univers:p.univers,unite:p.unite,prix:p.prix,bim:[],archicad:false,
    offres:[{f:p.fournisseur,prix:p.prix,stock:p.stock}],specs:[['Proposé par',fournisseur(p.fournisseur).nom]],desc:p.desc,nouveau:true}));
  return CATALOGUE.concat(ajouts);
}
function produit(id){return catalogue().find(p=>p.id===id)||null}
function fournisseur(id){return FOURNISSEURS.find(f=>f.id===id)||Store.org(id)||{id,nom:'Fournisseur',ville:'',delai:'À confirmer'}}
function univers(id){return UNIVERS.find(u=>u.id===id)||{id,nom:id}}
function visuel(p){return p.image?`<img src="${p.image}" alt="${esc(p.nom)}">`:illustration(p.univers)}
function meilleurPrix(p){return Math.min(...p.offres.map(o=>o.prix))}
function stockTotal(p){return p.offres.reduce((n,o)=>n+o.stock,0)}

/* Panier, au même format que la palette Archicad */
const Cart={
  read(){try{const v=JSON.parse(localStorage.getItem(CART_KEY));if(v&&v.version===1&&Array.isArray(v.items))return v}catch(e){}return{version:1,items:[]}},
  write(c){localStorage.setItem(CART_KEY,JSON.stringify(c));majCompteur()},
  lignes(){
    return this.read().items.map(it=>{
      const p=produit(it.productId);if(!p)return null;
      const f=it.fournisseur&&p.offres.find(o=>o.f===it.fournisseur)?it.fournisseur:p.offres.slice().sort((a,b)=>a.prix-b.prix)[0].f;
      const offre=p.offres.find(o=>o.f===f);
      return {p,q:Math.max(1,Math.min(offre.stock,parseInt(it.quantity)||1)),f,prix:offre.prix,source:it.source||(it.supplier?'Archicad':'')};
    }).filter(Boolean);
  },
  add(id,q=1,f=null){
    const c=this.read();const p=produit(id);if(!p)return;
    const fid=f||p.offres.slice().sort((a,b)=>a.prix-b.prix)[0].f;
    const it=c.items.find(x=>x.productId===id&&(x.fournisseur||fid)===fid);
    if(it){it.quantity=(parseInt(it.quantity)||0)+q;it.fournisseur=fid}else c.items.push({productId:id,quantity:q,fournisseur:fid});
    this.write(c);
  },
  setQ(i,q){const c=this.read();if(c.items[i]){c.items[i].quantity=Math.max(1,q);this.write(c)}},
  remove(i){const c=this.read();c.items.splice(i,1);this.write(c)},
  clear(){this.write({version:1,items:[]})},
  count(){return this.lignes().reduce((n,l)=>n+l.q,0)}
};
function majCompteur(){const n=Cart.count();$$('[data-cart-count]').forEach(e=>e.textContent=n)}

/* Gabarit commun */
const LOGO=`<svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true"><rect x="1" y="1" width="28" height="28" fill="#13233A"/><path d="M7 22 L15 7 L23 22" fill="none" stroke="#F4B21B" stroke-width="3"/><path d="M10.5 16.5 L19.5 16.5" stroke="#fff" stroke-width="2"/></svg>`;
function initiales(n){return n.split(/\s+/).map(x=>x[0]).join('').slice(0,2).toUpperCase()}
function entete(actif){
  const u=Store.user();const o=u&&Store.org(u.org);
  const lien=(h,t,k)=>`<a href="${h}"${actif===k?' aria-current="page"':''}>${t}</a>`;
  return `<a class="skip" href="#contenu">Aller au contenu</a>
  <div class="demo-band"><div class="wrap"><span>Version de démonstration. Les comptes, devis, commandes et paiements sont simulés dans votre navigateur.</span><button type="button" data-reset>Réinitialiser la démo</button></div></div>
  <header class="site-head"><div class="wrap">
    <a class="logo" href="/">${LOGO}AZUPLIFT</a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>
    <nav class="nav" id="nav" aria-label="Navigation principale">
      ${lien('/catalogue','Catalogue','catalogue')}${lien('/archicad-connecte','Pour les architectes','archicad')}${lien('/fournisseurs','Pour les fournisseurs','fournisseurs')}${lien('/tarifs','Tarifs','tarifs')}
    </nav>
    <div class="head-actions">
      <a class="cart-link" href="/panier" aria-label="Panier"><span class="lbl">Panier</span> <span class="cart-count" data-cart-count>0</span></a>
      ${u?`<a class="who" href="/espace"><span class="avatar">${initiales(u.nom)}</span><span><b>${esc(u.nom)}</b><small>${esc(o?o.nom:'')}</small></span></a>`:`<a class="btn btn-encre btn-sm" href="/connexion">Connexion</a>`}
    </div>
  </div></header>`;
}
function pied(){
  return `<footer class="site-foot"><div class="wrap">
  <div class="foot-grid">
    <div><a class="logo" href="/">${LOGO}AZUPLIFT</a><p>La place de marché des matériaux et objets BIM, reliée à la maquette de vos projets.</p></div>
    <div><h4>Acheter</h4><a href="/catalogue">Catalogue</a><a href="/panier">Panier</a><a href="/espace">Mon espace</a></div>
    <div><h4>Plateforme</h4><a href="/archicad-connecte">Extension Archicad</a><a href="/fournisseurs">Devenir fournisseur</a><a href="/tarifs">Tarifs</a></div>
    <div><h4>Contact</h4><a href="/contact">Nous écrire</a><a href="/contact#rendezvous">Demander une présentation</a></div>
  </div>
  <div class="foot-bas"><span>© ${new Date().getFullYear()} AZUPLIFT. Cotonou, Bénin.</span><span>Démonstration, aucune transaction réelle.</span></div>
  </div></footer><div class="toast" role="status" aria-live="polite"></div>`;
}
function toast(html,ms=3800){const t=$('.toast');if(!t)return;t.innerHTML=html;t.classList.add('on');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('on'),ms)}

function monter(actif){
  const h=$('[data-entete]');if(h)h.outerHTML=entete(actif);
  const f=$('[data-pied]');if(f)f.outerHTML=pied();
  majCompteur();
  const b=$('.menu-btn');if(b)b.addEventListener('click',()=>{const n=$('#nav');const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  const r=$('[data-reset]');if(r)r.addEventListener('click',()=>{Store.reset();location.href='/'});
}

/* Carte produit pour les grilles */
function carte(p){
  const offres=p.offres.length;
  return `<a class="fiche" href="/produit?id=${encodeURIComponent(p.id)}">
    <div class="fiche-visuel">${visuel(p)}</div>
    <div class="fiche-corps">
      <span class="fiche-cat">${esc(univers(p.univers).nom)}${p.fabricant?`, ${esc(p.fabricant)}`:''}</span>
      <h3>${esc(p.nom)}</h3>
      <div class="badges">${p.archicad?'<span class="badge badge-archicad">Placement Archicad</span>':''}${p.bim.length?`<span class="badge badge-bim">${p.bim.length} formats BIM</span>`:''}${p.nouveau?'<span class="badge badge-ok">Nouveau fournisseur</span>':''}<span class="badge">${offres} ${offres>1?'offres':'offre'}</span></div>
      <div class="fiche-prix">${offres>1?'<small>à partir de </small>':''}${fcfa(meilleurPrix(p))} <small>HT par ${esc(p.unite)}</small></div>
    </div></a>`;
}

window.AZU={ASTRID_ID,UNIVERS,FOURNISSEURS,STATUTS_CMD,ROLES,Store,Cart,catalogue,produit,fournisseur,univers,visuel,illustration,carte,meilleurPrix,stockTotal,fcfa,dateFr,esc,uid,$,$$,params,monter,toast,majCompteur,initiales};
})();
