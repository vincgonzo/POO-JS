var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    },

    attaquer: function (cible) {
       if (this.sante > 0) {
           var degats = this.force;
           console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
           cible.sante = cible.sante - degats;
           if (cible.sante > 0) {
               console.log(cible.nom + " a encore " + cible.sante + " points de vie");
           } else {
               cible.sante = 0;
               console.log(cible.nom + " est mort !");
           }
       } else {
           console.log(this.nom + " ne peut pas attaquer : il est mort...");
       }
   }
};

var Joueur = Object.create(Personnage);
Joueur.initJoueur = function(nom, sante, force){
  this.initPerso(nom, sante, force);
  this.xp = 0;
}
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};
Joueur.combattre = function(adversaire){
  this.attaquer(adversaire);
  if(adversaire.sante === 0){
    console.log(this.nom+" a tué "+ adversaire.nom+ " et gagne "+ adversaire.valeur + " points d'Xp");
    this.xp += adversaire.valeur;
  }
}

var Adversaire = Object.create(Personnage);
Adversaire.initAdversaire = function(nom, sante, force, race, valeur){
  this.initPerso(nom, sante, force);
  this.race = race;
  this.valeur = valeur;
}

var joueur1 = Object.create(Joueur);
joueur1.initJoueur('Aurora', 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur('Gladius', 130, 30);

var joueur3 = Object.create(Joueur);
joueur3.initJoueur('Erqtum', 180, 15);


console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire('Zogzog', 40, 20, 'orc', 10);


console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());
