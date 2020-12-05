const { createUser } = require('./CreateUser/');
const { readUser } = require('./ReadUser/');
const { getAllHabits, createHabit, readHabit } = require('./Habits/');

module.exports = {
  createUser,
  readUser,
  getAllHabits,
  createHabit,
  readHabit
}