/**
 *
 * @param date object with keys year, month, day
 * @returns {string}
 */
export const dateToKey = (date) => {
    return '' + date.month + '-' + date.day;
};