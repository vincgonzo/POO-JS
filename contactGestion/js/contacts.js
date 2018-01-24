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


function logArray(){
  var html = '';
  arrayContacts.forEach(function(Contacts, index){
    html += '<li>Le contact numéro '+ index +' est ' + Contacts.nom +' '+ Contacts.prenom + '.</li>';
    index++;
  });

  return html;
}

function callContact(){
  var listDiv = document.getElementById("listContact");

  var listContact = logArray();
  listDiv.innerHTML = listContact;
}

function addContact(){
  var nom = prompt("Entrez le Nom de la personne");
  var prenom = prompt("Entrez le Prénom de la personne");

  var newContact = Object.create(Contact);
  newContact.initContact(nom, prenom);
  arrayContacts.push(newContact);

  flashBag(newContact);
}

function flashBag(contact){
  var flashMessage = document.getElementById("flashBag");

  flashMessage.innerHTML = '<div class="alert alert-success" role="alert"><strong>Bravo</strong> vous avez bien créer votre nouveau contact.<br/>Son nom est '+contact.nom+' et son prénom '+contact.prenom+'<br/>Réappuyez sur list des contacts pour mettre à jour celle-ci.</div>';

  setTimeout(function(){
    flashMessage.innerHTML = "";
  }, 3000);
}
