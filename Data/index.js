const {HabitsCollection}= require('./HabitsCollection/')
const {UsersCollection} = require('./UsersCollection/')

const Data = new Map();
Data.set('Habits', HabitsCollection);
Data.set('Users', UsersCollection);


module.exports = {
  Data
}
