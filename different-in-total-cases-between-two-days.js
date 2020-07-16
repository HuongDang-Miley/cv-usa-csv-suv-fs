const getTotalCasesByDay = require('./get-total-cases-by-day.js')


const differentInTotalCasesBetweenTwoDays = function(date1, date2, data) {
    const totalCasesDate1 = getTotalCasesByDay(date1, data)
    console.log({totalCasesDate1})
    const totalCasesDate2 = getTotalCasesByDay(date2, data)
    console.log({totalCasesDate2})
    const subtract = Math.abs(totalCasesDate1 - totalCasesDate2)
    return subtract
}


module.exports = differentInTotalCasesBetweenTwoDays;
