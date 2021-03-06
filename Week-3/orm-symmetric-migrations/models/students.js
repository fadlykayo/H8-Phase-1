'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {

      },
      getAllData: function (cb) {
        Student.findAll().then(function (data) {
          let temp = [];
          data.forEach(function (item) {
            temp.push({
              id: item.dataValues.id,
              first_name: item.dataValues.first_name,
              last_name: item.dataValues.last_name,
              full_name: item.getFullName(),
              birthdate: item.dataValues.birthdate,
              age: item.getAge()
            });
          });
          cb(temp);
        });
      },
      updateName: function (cb) {
        Student.findAll().then(function (find) {
          find.forEach(function (data) {
            data.update({name: data.getFullName()}); // TODO belajarin lagi
          });
          cb(find);
        });
      }
      // updateAddress: function (cb) {
      //   Student.findAll().then(function (find) {
      //     find.forEach(function (data) {
      //       data.update({name: data.getFullName()}); // TODO belajarin lagi
      //     });
      //     cb(find);
      //   });
      // }
    },
    instanceMethods: {
      getFullName: function () {
        return (`${this.first_name} ${this.last_name}`);
      },
      getAge: function () {
        let birthdate = new Date (this.birthdate);
        return Math.floor((Date.now() - birthdate) / 31557600000);
      }
    }
  });
  return Student;
};

// Note

/*
console.log(`Id: ${data.dataValues.id}`);
console.log(`First name: ${data.dataValues.first_name}`);
console.log(`Last name: ${data.dataValues.last_name}`);
console.log(`Fullname (method): ${data.getFullName()}`);
console.log(`Birthdate: ${data.dataValues.birthdate}`);
console.log(`Age: ${data.getAge()}\n`);

1.
knapa harus berbentuk function?
karena supaya bisa dimanipulasi lagi si cb(data) nya di dalam function itu
sebenernya ga perlu, cara nya no 3.

Kalo ga mau di luar for each nya:
data.forEach(function(data) {
  console.log(data.dataValues);
})
*/

/*
2. Cara cari findAll
findAll1: function () {
  // console.log(Student.findAll()); // gak bisa gini
  Student.findAll().then(function (data) {
    console.log(data);
  })
}

db.Student.findAll1();
*/

/*
3. Cara kalo ga mau ada cb:
getAllData: function () {
  return Student.findAll()
}
db.Student.getAllData().then(function (result) {
  result.forEach(function (data) {
    console.log(`Id: ${data.dataValues.id}`);
    console.log(`First name: ${data.dataValues.first_name}`);
    console.log(`Last name: ${data.dataValues.last_name}`);
    console.log(`Birthdate: ${data.dataValues.birthdate}`);
    console.log(`Fullname: ${data.getFullName()}`);
    console.log(`Age: ${data.getAge()}\n`);});
})
*/

/*
4. Cara lain cari age:
let now = new Date();
let now2 = now.getFullYear()
let age = this.birthdate.getFullYear()
return age - now2;
*/

/*
5. Cara untuk prototype attribute:
Student.findAll().then(function(students) {
  students.forEach(function(data) {
  data.full_name = `${data.first_name} ${data.last_name}`
  })
  cb(students);
})
*/
