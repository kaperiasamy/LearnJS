// every and some 

import { printArray, log, debugLog } from './logHelper.js';

const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Dell', ram: 16 },
  { name: 'HP', ram: 8 },
  { name: 'Lenovo', ram: 32 },
  { name: 'Asus', ram: 12 },
  { name: 'Acer', ram: 16 },
  { name: 'MSI', ram: 64 },
  { name: 'Samsung', ram: 4 },
  { name: 'Microsoft', ram: 16 },
  { name: 'Razer', ram: 32 }
];

// We want to find all the computers that have at least 16GB of RAM

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false; 

for (var i = 0; i < computers.length; i++) {
  if (computers[i].ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

log("All computers can run the program:", allComputersCanRunProgram);
log("Only some computers can run the program:", onlySomeComputersCanRunProgram);

allComputersCanRunProgram = computers.every(function(computer){
    // Every single element returns true, this (whole) will return true. Otherwise returns false.
    return computer.ram >= 16;
});

log("All computers can run the program:", allComputersCanRunProgram);

onlySomeComputersCanRunProgram = computers.some(function(computer){
    return computer.ram >= 16;
});

log("Only some computers can run the program:", onlySomeComputersCanRunProgram);

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value !== null && this.value !== undefined && this.value !== ''  && this.value.length > 0;
}

var userName = new Field('JohnDoe');
var password = new Field('password123');
var birthDate = new Field('2009-05-07'); //2009-05-07

log("User is valid:", userName.validate() && password.validate());

var fields = [userName, password, birthDate];
var allFieldsValid = fields.every(function(field) {
    return field.validate();
});
log("All fields are valid:", allFieldsValid);

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user){
    return user.hasSubmitted;
});

log ("All users have submitted:", hasSubmitted);

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
  return request.status === 'pending';
});
log("Some requests are in progress:", inProgress);