
const prompt = require("prompt-sync")();
const validation = require("./validation");
let contact;
let addressBookArray = [];
//add contact
let addContact = () => {
  let firstName = prompt("Enter the first name: ");
  let lastName = prompt("Enter the last name: ");
  let address = prompt("Enter the Address: ");
  let city = prompt("Enter the city: ");
  let state = prompt("Enter the State: ");
  let zip = prompt("Enter the ZIP: ");
  let phone = prompt("Enter the Phone number: ");
  let email = prompt("Enter the email id: ");
  try {
    validation.firstNameValidation(firstName);
    validation.lastNameValidation(lastName);
    validation.addressValidation(address);
    validation.cityValidation(city);
    validation.stateValidation(state);
    validation.zipValidation(zip);
    validation.phoneValidation(phone);
    validation.emailValidation(email);
  } catch (error) {
    console.error(error);
  
  }
  contact = {
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: state,
      zip: zip,
      phone: phone,
      email: email,
    };
    console.log("Contacts inserted successfully");
    addressBookArray.push(contact)
};
addContact();
console.log(addressBookArray);