const habitValidator = (habit) => {
    const newHabitObj = {}

    for (const entry of Object.keys(habit)) {
        switch (entry) {
            case 'name':
                // Validate the name property
                if (typeof (habit[entry]) !== 'string') {
                    // console.log('Stringified the habitname');
                    newHabitObj.name = String(habit.name)
                } else {
                    // console.log('WE GOT A STRING NAME');
                    newHabitObj.name = habit.name
                }
                break;
            case 'frequency':
                newHabitObj.frequency = habit.frequency;
                break;
            case 'goal':
                newHabitObj.goal = habit.goal;
                break;
            default:
                break;
        }
    }

    return newHabitObj
}

module.exports = {
    habitValidator
}