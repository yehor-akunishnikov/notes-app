import {useEffect, useRef} from 'react';

import classes from './Editor.module.css';

export const Editor = ({currentNoteText, currentTimePeriod, dispatch}) => {
    const textareaRef = useRef();

    const onBlur = (e) => {
        dispatch({type: 'saveNote', payload: {newText: e.target.value}});
    };

    useEffect(() => {
        textareaRef.current.value = currentNoteText;
    }, [currentNoteText]);

    return (<textarea
        onBlur={onBlur}
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
