import {useEffect, useRef} from 'react';

import classes from './Editor.module.css';

export const Editor = ({currentNoteText, currentTimePeriod, updateCurrentNote}) => {
    const textareaRef = useRef();

    useEffect(() => {
        textareaRef.current.value = currentNoteText;
    }, [currentNoteText]);

    return (<textarea
        onBlur={(e) => updateCurrentNote(e.target.value)}
        readOnly={currentTimePeriod < 0}
        defaultValue={currentNoteText}
        className={classes.editor}
        ref={textareaRef}
        name="note"
        id="note"
        cols="30"
        rows="10">
    </textarea>);
};
