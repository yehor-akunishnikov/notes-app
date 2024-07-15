import {useAppState} from '../../hooks/index.js';

import * as Controls from './Controls/index.js';
import {Editor} from './Editor/index.js';
import classes from './Notes.module.css';
import {Title} from "./Title/index.js";

export const Notes = () => {
    const {
        currentNoteText,
        currentDateString,
        doStep,
        currentTimePeriod,
        updateCurrentNote
    } = useAppState(Date.now());

    const formatDate = () => {
        return new Date(currentDateString).toDateString();
    }

    return (<div className={classes.container}>
        <Title/>
        <div className={classes.editorWrapper}>
            <Controls.BtnPrev doStep={doStep} />
            <Editor
                currentNoteText={currentNoteText}
                updateCurrentNote={updateCurrentNote}
                currentTimePeriod={currentTimePeriod}
            />
            <Controls.BtnNext
                doStep={doStep}
                currentTimePeriod={currentTimePeriod}
            />
        </div>
        <time>{formatDate()}</time>
    </div>);
};
