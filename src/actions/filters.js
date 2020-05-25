
// SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// SORT BY DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// SET START DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

// SET END DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

module.exports = { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate }