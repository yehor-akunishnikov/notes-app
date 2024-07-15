import {useMemo, useState} from 'react';

import * as localStorageService from '../services/localStorage.js';
import * as dateService from '../services/date.js';

export const useAppState = (initialTimestamp) => {
    const [currentDateString, setCurrentDateString] = useState(
        dateService.getDateString(initialTimestamp)
    );
    const currentNoteText = useMemo(
        () => localStorageService.getState()[currentDateString] ?? '',
        [currentDateString]
    );
    const currentTimePeriod = useMemo(
        () => dateService.getCurrentTimePeriod(currentDateString),
        [currentDateString]
    );

    const updateCurrentNote = (newText) => {
        localStorageService.updateItem(currentDateString, newText);
    };
    const doStep = (direction) => {
        const oldTimestamp = dateService.getTimestamp(currentDateString);
        const newTimestamp = dateService.goTo(oldTimestamp, direction);

        setCurrentDateString(dateService.getDateString(newTimestamp));
    };

    return {
        currentNoteText,
        currentDateString,
        currentTimePeriod,
        doStep,
        updateCurrentNote
    };
};
