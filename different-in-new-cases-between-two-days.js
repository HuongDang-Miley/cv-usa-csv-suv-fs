const getNewCasesByDay = require('./get-total-cases-by-day.js')


const differentInNewCasesBetweenTwoDays = function(date1, date2, data) {
    const newCaseDate1 = getNewCasesByDay(date1, data)
    console.log({newCaseDate1})
    const newCaseDate2 = getNewCasesByDay(date2, data)
    console.log({newCaseDate2})
    const subtract = Math.abs(newCaseDate1 - newCaseDate2)
    return subtract
}


module.exports = differentInNewCasesBetweenTwoDays;
