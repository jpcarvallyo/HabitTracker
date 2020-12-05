// const { UsersCollection } = require('../../../../Data/UsersCollection/')

const getAllHabits = (user) => {
  // console.log('this: ', this)
  return user.get('habits')
}

module.exports = {
  getAllHabits
}