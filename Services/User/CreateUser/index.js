const { Data } = require('../../../Data/')
const { getDataFromMap } = require('../../../Utils/')
const { readUsers } = require('../../Collection')

const { Users } = getDataFromMap(Data);

const createUser = (obj) => {
  const { name, age, signUpDate, location, habits } = obj;
  
  // Check if Obj is in Database first
  // If we can't find User in DATABase (using the id), create user
  if (!Users.has(obj.id)) {
    const { name, age, signUpDate, location, habits } = obj;
    const guid = (name + age);
    const user = new Map();
    user.set('name', name);
    user.set('age', age)
    user.set('signUpDate', signUpDate)
    user.set('location', location)
    user.set('habits', habits)
    user.set('GUID', guid)
    
    Users.set(guid, user)
    
    return 'User was successfully created'
  } else {
    return "User is already in Database: " + Users.get(obj.id)
  }
  // return obj
}


module.exports = {
  createUser
}