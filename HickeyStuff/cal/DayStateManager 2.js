const { isToday, isDateNotInRange, sameMonth } = require('./DateUtils');
const { toMarkingFormat } = require('./Interface');
export function getState(day, current, props, disableDaySelection) {
    const { minDate, maxDate, disabledByDefault, context } = props;
    let state = '';
    if (!disableDaySelection && ((context?.date ?? toMarkingFormat(current)) === toMarkingFormat(day))) {
        state = 'selected';
    }
    else if (isToday(day)) {
        state = 'today';
    }
    else if (disabledByDefault) {
        state = 'disabled';
    }
    else if (isDateNotInRange(day, minDate, maxDate)) {
        state = 'disabled';
    }
    else if (!sameMonth(day, current)) {
        state = 'disabled';
    }
    return state;
}