import {useAppState} from '../../hooks/index.js';

import * as Controls from './Controls/index.js';
import {Editor} from './Editor/index.js';
import classes from './Notes.module.css';
import {Title} from "./Title/index.js";

export const Notes = () => {
    const {
        state,
        dispatch
    } = useAppState(Date.now());

    const formatDate = () => {
        return new Date(state.currentDateString).toDateString();
    }

    return (<div className={classes.container}>
        <Title/>
        <div className={classes.editorWrapper}>
            <Controls.BtnPrev dispatch={dispatch} />
            <Editor
                currentNoteText={state.currentNoteText}
                dispatch={dispatch}
                currentTimePeriod={state.currentTimePeriod}
            />
            <Controls.BtnNext
                dispatch={dispatch}
                currentTimePeriod={state.currentTimePeriod}
            />
        </div>
        <time>{formatDate()}</time>
    </div>);
};
