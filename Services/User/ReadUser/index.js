const { Data } = require('../../../Data');
const { getDataFromMap } = require('../../../Utils/')

const readUser = (userID) => {
  const { Users } = getDataFromMap(Data);
  // Check if user is in database

  if (Users.has(userID)) {
    return Users.get(userID)
  } else {
    return "USER is not found"
  }
}

module.exports = {
  readUser
}