const { User } = require('./Services/')
const { populateDatabase } = require('./createUsers')

// Add two test users (simulates Database peristance)
populateDatabase()

// User module has numerous methods available to it
const James = User.readUser('James27')

// Create habit 'Workout'
User.createHabit('James27', {
    name: 'Workout',
    frequency: null,
    goal: null
})

// Create habit 'Drink Water'
User.createHabit('James27', {
    name: 'Drink Water',
    frequency: null,
    goal: null
})

// Retrieve all User habits | create expression;
const allJamesHabits = User.getAllHabits(James)
console.log('allJamesHabits => ', allJamesHabits)

// Read single habit 'Workout' from user James obj | create expression
const jamesWorkOutHabit = User.readHabit(James, 'Workout');
console.log('James Workout Habit => ', jamesWorkOutHabit);

// console.log(User.readUser('James27ed'));
