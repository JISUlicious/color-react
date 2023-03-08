
// to-do : async storage 적용하기
export const getItem = (key, defaultValue = {}) => {
    const storedData = localStorage.getItem(key);
    return storedData === null ? defaultValue : JSON.parse(storedData);
};

export const setItem = (key, value) => {
    localStorage.setItem(key, value);
};