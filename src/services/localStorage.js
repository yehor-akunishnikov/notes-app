const APP_STATE_KEY = 'OPEN_JOURNAL';

export const getState = () => {
    const stateJSON = localStorage.getItem(APP_STATE_KEY);

    return stateJSON ? JSON.parse(stateJSON) : {};
};

export const setState = (state) => {
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
};

export const updateItem = (key, newValue) => {
    const currentState = getState();

    currentState[key] = newValue;

    setState(currentState);
};

export const getItemValue = (itemId) => {
    return getState()[itemId] ?? '';
};
