const { Collection, User } = require('./Services/')

const { populateDatabase } = require('./createUsers')

// Add two test users
populateDatabase()

// Using Imported Collection Service
// console.log(Collection.readUsers())
// console.log(User.readUser('James27'))
const James = User.readUser('James27')
// console.log(James)
User.createHabit()
// console.log(User.getAllHabits(James))

// I want to be able to read one user
// User




