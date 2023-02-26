export const keyGenerater = ({year, month, day}) => {
    const key = '' + year + '-' + month + '-' + day;
    return key;
};