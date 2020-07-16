const getDate = require('./get-date.js');
const getTotalCases = require('./get-total-cases.js')


const getTotalCasesByDay = function(date, data) {
  for (const row of data) {
    if (getDate(row) === date) {
      return getTotalCases(row);
    }
  }
}


if (typeof getTotalCasesByDay === 'undefined') {
  getTotalCasesByDay = undefined;
}


module.exports = getTotalCasesByDay;
