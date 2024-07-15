export const goTo = (currentTimestamp, direction) => {
    const currentDate = new Date(currentTimestamp);

    return currentDate.setDate(currentDate.getDate() + direction);
};

export const getDateString = (timestamp) => {
    return new Date(timestamp).toISOString().split('T')[0];
};

export const getTimestamp = (dateString) => {
    return new Date(dateString).getTime();
};

export const getCurrentTimePeriod = (currentDateString) => {
    const currentStepTimestamp = getTimestamp(currentDateString);
    const currentDayTimestamp = getTimestamp(getDateString(Date.now()));

    if (currentStepTimestamp === currentDayTimestamp) {
        return 0;
    }

    return currentStepTimestamp > currentDayTimestamp ? 1 : -1;
};
