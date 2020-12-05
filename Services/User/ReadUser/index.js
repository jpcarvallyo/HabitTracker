const { Data } = require('../../../Data');
const { getDataFromMap } = require('../../../Utils/')

const readUser = (userID) => {
  const { Users } = getDataFromMap(Data);
  // Check if user is in database
  const user = Users.get(userID);
  if (user) {
    return user
  } else {
    console.log('User not found, not adding habit');
    return false
  }
}

module.exports = {
  readUser
}