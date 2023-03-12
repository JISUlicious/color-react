/**
 * 
 * @param {*} param0 object with key of "year", "month", "day"
 * @returns key in string
 */
export const dateToKey = ({year, month, day}) => {
    const key = '' + year + '-' + month + '-' + day;
    return key;
};