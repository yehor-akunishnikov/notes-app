import classes from './Controls.module.css';

export const BtnPrev = ({doStep}) => {
    return (
        <button
            className={classes.btn}
            onClick={() => doStep(-1)}
        >
            ←
        </button>
    );
};

export const BtnNext = ({doStep, currentTimePeriod}) => {
    return (
        <button
            className={classes.btn}
            disabled={currentTimePeriod >= 0}
            onClick={() => doStep(1)}
        >
            →
        </button>
    );
};
