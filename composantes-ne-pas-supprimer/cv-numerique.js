/* Ce site comme ce code restent la propriété de son créateur, Nikita Prigent, domicilié en France */


let languesbarre = document.getElementById("langues-barre");           /* Importation des variables */
let reseauxbarre = document.getElementById("reseaux-barre");
let languesetrangeres = document.getElementById("langues-etrangeres-div");
let reseauxsociaux = document.getElementById("reseaux-sociaux-div");
let portfoliobarre = document.getElementById("portfolio-barre");
let portfolio = document.getElementById("portfolio");


languesbarre.addEventListener('click', function togg() {            /* Affichage dans le menu des langues */
    languesetrangeres.style.display =
        languesetrangeres.style.display === 'block' ? 'none' : 'block';
});


reseauxbarre.addEventListener('click', function togg2() {           /* Affichage des réseaux sociaux */
    reseauxsociaux.style.display =
        reseauxsociaux.style.display === 'block' ? 'none' : 'block';
});


portfoliobarre.addEventListener('click', function togg3() {        /* Affichage du message inhérent au portfolio */
    portfolio.style.display =
        portfolio.style.display === 'block' ? 'none' : 'block';
});


portfoliobarre.onmouseover = aff;                                    
function aff(){
  portfolio.style.display = "block";
}
portfoliobarre.onmouseout = cac;
function cac(){
  portfolio.style.display = "none";
}