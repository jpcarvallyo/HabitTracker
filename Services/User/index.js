const { createUser } = require('./CreateUser/');
const { readUser } = require('./ReadUser/');
const { getAllHabits, createHabit } = require('./Habits/');

module.exports = {
  createUser,
  readUser,
  getAllHabits,
  createHabit
}