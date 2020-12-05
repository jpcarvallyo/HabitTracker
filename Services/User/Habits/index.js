// const {} = require('./Habit')
const { getAllHabits } = require('./HabitCollection/')
const { createHabit, readHabit } = require('./Habit/')

module.exports = {
  getAllHabits,
  createHabit,
  readHabit
}