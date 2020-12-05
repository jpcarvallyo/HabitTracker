const { Collection, Habit, User } = require('./Services/')

const populateDatabase = async () => {

  // LOGIC for ACTIONS done on SIGN UP PAGE
  // const { name, age, signUpDate, location, habits} = obj;
  const testUser = {
    name: 'James',
    age: 27,
    signUpDate: Date.now(),
    location: 'Oakland',
    habits: new Map()
  };

  const testUser2 = {
    name: 'Manly',
    age: 35,
    signUpDate: Date.now(),
    location: 'Seattle',
    habits: new Map()
  }

  const createUsers = () => {
    const userCreated = User.createUser(testUser);
  
    return 'Users added'
  }

  const createUser2 = () => {
    const userCreated = User.createUser(testUser2);
    return 'User 2 added'
  }

  // Want these to run immediately not wait
  createUsers()
  createUser2()
}

// Add habit to user



module.exports = {
  populateDatabase
}