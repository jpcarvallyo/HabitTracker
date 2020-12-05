const { Data } = require('../../../Data/')
const { getDataFromMap } = require('../../../Utils/')

const { Users } = getDataFromMap(Data);

const readUsers = () => Users

module.exports = {
  readUsers
}