const { readUser } = require('../../../ReadUser/')
const { habitValidator } = require('../HabitValidator/')

// Creates Habit for specified User
const createHabit = (userID, habit) => {
  // Validate the habit passed in with habitValidator
  const habitObj = habitValidator(habit)
  const { name } = habitObj; // Destructure Obj | pull out name property and place in variable

  // TODO: Need a valid user service
  // in meantime just user readUser

  // Read User from Read User service
  const userObj = readUser(userID);
  if (userObj && habitObj) { // If userObj and habitObj is valid
    // Retrieve userHabits from Map obj
    const habitsMap = userObj.get('habits');

    // Check if habitsMap has the habit
    if (!habitsMap.has(name)) { // if habit is NOT there then ADD it
      // Set obj to Map with name string
      habitsMap.set(name, habitObj)
      // Assign habitObj a unique ID
      habitObj.guid = name + Math.round(Math.random() * 1000)

      return habitsMap.get(name) // Return newly created habit to user
    } else { // habit IS there so retrieve and return to user
      return habitsMap.get(name)
    }
  } else {
    return `No user found`
  }
}

module.exports = {
  createHabit
}