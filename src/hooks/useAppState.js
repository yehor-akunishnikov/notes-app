import {useReducer} from 'react';

import * as localStorageService from '../services/localStorage.js';
import * as dateService from '../services/date.js';

const doStep = (state, payload) => {
    const {currentDateString} = state;
    const oldTimestamp = dateService.getTimestamp(currentDateString);

    const newTimestamp = dateService.goTo(oldTimestamp, payload.direction);
    const newDateString = dateService.getDateString(newTimestamp);

    return {
        ...state,
        currentDateString: dateService.getDateString(newTimestamp),
        currentNoteText: localStorageService.getItemValue(newDateString),
        currentTimePeriod: dateService.getCurrentTimePeriod(newDateString)
    }
};

const saveNote = (state, payload) => {
    const {currentDateString} = state;
    const {newText} = payload;

    localStorageService.updateItem(currentDateString, newText);

    return {
        ...state,
        currentNoteText: newText
    }
};

export const useAppState = (initialTimestamp) => {
    const [state, dispatch] = useReducer(
        (state, {type, payload}) => {
            switch (type) {
                case 'doStep': return doStep(state, payload);
                case 'saveNote': return saveNote(state, payload);
                default: return state;
            }
        },
        null,
        () => {
            const currentDateString = dateService.getDateString(initialTimestamp);

            return {
                currentDateString,
                currentNoteText: localStorageService.getItemValue(currentDateString),
                currentTimePeriod: dateService.getCurrentTimePeriod(currentDateString)
            };
        }
    );

    return {
        state,
        dispatch
    };
};
