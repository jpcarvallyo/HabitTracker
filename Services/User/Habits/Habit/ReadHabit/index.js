const readHabit = (user, habitName) => {
    const habitsMap = user.get('habits');
    const habitResult = habitsMap.get(habitName) ? habitsMap.get(habitName) : 'Habit is not there';

    return habitResult
}

module.exports = {
    readHabit
}