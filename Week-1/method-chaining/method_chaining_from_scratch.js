// The data store:
var usersData = [{
   firstName: "SpongeBob",
   lastName: "SquarePants",
   email: "spongebob@crustycrab.com",
   id: 102
}, {
   firstName: "Patrick",
   lastName: "Star",
   email: "patric.star@gmail.com",
   id: 103
}, {
   firstName: "Squidward",
   lastName: "Tentacles",
   email: "awesomesquidward@yahoo.com",
   id: 104
}]

function titleCaseName(str) {

}

 // Our object with the chainable methods using class in ES6
class UserController {

  //  titleCaseName(str) {
  //
  //
  //  }
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.id = 0;
  }

  findUser(str) {
    for (let i = 0; i < usersData.length; i++) {
      if (str == usersData[i]["email"]) {
        this.firstName = usersData[i]["firstName"];
        this.lastName = usersData[i]["lastName"];
        this.email = usersData[i]["email"];
        this.id = usersData[i]["id"];
        return this;
      }
    }
  }

  formatName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return this;
  }

  formatData() {
    this.result = `Member name: ${this.fullName} \nID: ${this.id} \nEmail: ${this.email}`
    return this;
  }

  displayUser() {
    return this.result;
  }
}

// Driver code
let userController = new UserController;
console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser());
 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
