document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  // Create a User object with the following properties:
  // - firstName = string
  // - lastName = string
  // - age = integer
  // - occupation = string
  // - address = object, with number, street and city as properties
  // - friends = array
  // - hasCar = boolean
  var user = {
    firstName:"Suki",
    lastName:"Law",
    age: 4,
    occupation: "Designer",
    address: {
      flat: 1, 
      roadNumber: 123, 
      roadName: "Happy Road", 
      city: "Hong Kong"},
    friends: [Mary, John, Peter],
    hasCar: true
  }
  // Using the existing HTML elements, assign each element its respective property from your new object
  // The first one has been done for you

  // BASIC
  // name
  var nameElement = document.getElementById("name");
  nameElement.innerText = `${user.firstName} ${user.lastName}`;
  
  // age
  var ageElement = document.getElementById("age");
  ageElement.innerText = `${user.age}`;

  // occupation
  var occupationElement = document.getElementById("occupation");
  occupationElement.innerText = `${user.occupation}`;

  // hasCar
  var hasCarElement = document.getElementById("hasCar");
  hasCarElement.innerText = `${user.hasCar}`;

  // INTERMEDIATE
  // address number
  var addressElement = document.getElementById("Address number");
  addressElement.innerText = `${user.address.roadNumber}`;
  
  // address street
  var streetElement = document.getElementById("Street");
  streetElement.innerText = `${user.address.roadName}`;

  // address city
  var cityElement = document.getElementById("City");
  cityElement.innerText = `${user.address.city}`;


  // ADVANCED
  // loop through the friends and append each one onto the correct element

})