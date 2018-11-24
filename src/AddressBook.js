function AddressBook (){
  this.contacts = [];
}

// addContact
AddressBook.prototype.addContact = function(contact){
  this.contacts.push(contact)
}

// getContact
AddressBook.prototype.getContact = function(index){
  return this.contacts[index];
}

// deleteContact
AddressBook.prototype.deleteContact = function(index){
  this.contacts.splice(index, 1);
}