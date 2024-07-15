import classes from './Controls.module.css';

export const BtnPrev = ({dispatch}) => {
    const onClick = () => {
        dispatch({type: 'doStep', payload: {direction: -1}});
    };

    return (
        <button
            className={classes.btn}
            onClick={onClick}
        >
            ←
        </button>
    );
};

export const BtnNext = ({dispatch, currentTimePeriod}) => {
    const onClick = () => {
        dispatch({type: 'doStep', payload: {direction: 1}});
    };

    return (
        <button
            className={classes.btn}
            disabled={currentTimePeriod >= 0}
            onClick={onClick}
        >
            →
        </button>
    );
};
