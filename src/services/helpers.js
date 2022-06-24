export const persist = (key, persistedValue, value) =>
    localStorage.setItem(key, JSON.stringify([...persistedValue, value]));