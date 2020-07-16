// get user input
const command = process.argv[2]
const date1 = process.argv[3]
const date2 = process.argv[4]

// convert cvs string to 2d array:
const fs = require('fs')
const file = fs.readFileSync('./owid-covid-usa-data.csv', 'utf8')
const getRows = require('./get-rows.js')
const array2DData = getRows(file)

// Require functions
const getNewCasesByDay = require('./get-new-cases-by-day.js')
const getTotalCasesByDay = require('./get-total-cases-by-day.js')

// stretch goal
const differentInTotalCasesBetweenTwoDays = require('./different-in-total-cases-between-two-days.js')
const differentInNewCasesBetweenTwoDays = require('./different-in-new-cases-between-two-days.js')


// when there is no user input, throw this instruction
const menu =
    `\n
There is no input OR your input is wrong. \n
Type: \n
total YYYY-MM-DD (to see total COVID-19 case on that date) \n
new YYYY-MM-DD (to see new COVID-19 cases on that date) \n
totalChange YYYY-MM-DD YYYY-MM-DD (to see changes in total cases between those dates) \n
newChange YYYY-MM-DD YYYY-MM-DD (to see changes in new cases between those dates) \n
* Note: dates range from 2019-12-31 to 2020-07-12 \n`


switch (command) {
    case 'total':
        const totalCases = getTotalCasesByDay(date1, array2DData)
        console.log({ totalCases })
        break;
    case 'new':
        const newCases = getNewCasesByDay(date1, array2DData)
        console.log({ newCases })
        break;
    case 'totalChange':
        const differentInTotalCases = differentInTotalCasesBetweenTwoDays(date1, date2, array2DData)
        console.log({ differentInTotalCases })
        break;
    case 'newChange':
        const differentInNewCases = differentInNewCasesBetweenTwoDays(date1, date2, array2DData)
        console.log({ differentInNewCases })
        break;
    default:
        console.log(menu)
        console.log({ command })
        console.log({ date1 })
        console.log({ date2 })
        console.log() //-> just to get space
}


