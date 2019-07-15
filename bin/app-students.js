'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/mongoose-crud', {
  useMongoClient: true
})
const db = mongoose.connection

//Here, Import the `models/student.js` to variable and called 'Student'
// const Student = ...??
const Student = require("../models/student.js")

const done = function () { // eslint-disable-line no-unused-vars
  db.close()
}


const create = function (firstName, lastName, grade, age, city) {
  /* Add Code Here */
  const studentParams = {
    
      firstName: firstName,
      lastName: lastName,
      grade:grade,
      age: age,
      city: city
    }
    Student.create(studentParams)
    // .then(student=>console.log(student.toJSON()))
    .then((student) => console.log(student))
    .catch(console.error)
    .then(done)

}

const index = function () {
  /* Add Code Here */
  Student.find()
  .then((students) => {
    students.forEach((student) => console.log(student))
  })
  .catch(console.error)
  .then(done)
  
}

const show = function (id) {
  /* Add Code Here */
  Student.findById(id)
  .then((student) => console.log(student))
  .catch(console.error)
  .then(done)
}

const destroy = function (id) {
  /* Add Code Here */
  Student.findById(id)
  .then(student => student.remove)
  .catch(console.error)
  .then(done)

}

const update = function (id, field, value) {
  /* Add Code Here */
  Student.findById(id)
  .then(student => {
    student[field] = value

    return student.save()
  })

  .then(student => console.log(student.toJSON()))
  .catch(console.error)
  .then(done)
}


 
db.once('open', function () {
  const command = process.argv[2]

  let field
  let id

  switch (command) {
    case 'create':
      const firstName = process.argv[3]
      const lastName = process.argv[4]
      const grade = process.argv[5]
      const age = process.argv[6]
      const city = process.argv[7]

      create(firstName, lastName, grade, age, city)

      break

    case 'show':
      id = process.argv[3]
      show(id)
      break

    case 'update':
      id = process.argv[3]
      field = process.argv[4]
      const value = process.argv[5]
      update(id, field, value)
      break

    case 'destroy':
      id = process.argv[3]
      destroy(id)
      break

    default:
      index()

      break
  }
})

module.exports = Student
