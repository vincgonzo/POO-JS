/*
Activité : gestion des contacts
*/

var Contacts = {
  init: function(nom, prenom){
    this.nom = nom;
    this.prenom = prenom;
  }
}
var arrayContacts = [];


var Contact = Object.create(Contacts);
Contact.initContact = function(nom, prenom){
  this.init(nom, prenom);
}

var jp = Object.create(Contact);
jp.initContact('Vandale', 'Jean pierre');

var elsa = Object.create(Contact);
elsa.initContact('Maigne', 'Elsa');

var erik = Object.create(Contact);
erik.initContact('Vandersmith', 'Erik');

arrayContacts.push(jp, elsa, erik);


arrayContacts.forEach(function(Contacts){
  console.log(Contacts.nom +' est son nom et '+ Contacts.prenom + ' son prénom, bien sûr.');
});
