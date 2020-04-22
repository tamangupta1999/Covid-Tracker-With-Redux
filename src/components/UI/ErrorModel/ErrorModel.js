import React from 'react';
import classes from './ErrorModel.module.css';

const ErrorModel = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Backdrop} onClick={props.onClose} />
            <div className={classes.ErrorModel}>
                <h2 className={classes.ErrorHeading}>An Error Occurred!</h2>
                <p className={classes.ErrorPara}>{props.children}</p>
            </div>
        </React.Fragment>
    )
}

export default ErrorModel;
