export const dateToKey = ({year, month, day}) => {
    const key = '' + year + '-' + month + '-' + day;
    return key;
};