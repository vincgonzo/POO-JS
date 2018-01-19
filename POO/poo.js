var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    },
};

var Joueur1 = Object.create(Personnage);
Joueur.initJoueur = function(nom, sante, force){
  this.initPerso(nom, sante, force);
  this.xp = 0;
}

Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};

var Adversaire = Object.create(Personnage);

Adversaire.initAdversaire = function(nom, sante, force, race, valeur){
  this.initPerso(nom, sante, force);
  this.race = race;
  this.valeur = valeur;
}

console.log(perso1.decrire());
console.log(perso2.decrire());
