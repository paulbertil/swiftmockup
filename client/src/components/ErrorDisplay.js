import React from 'react'

import Button from './Button'
import ErrorDisplayStyles from './ErrorDisplay.module.scss'

const ErrorDisplay = (props) => {
    const {
        message,
        handleErrorMessage
    } = props;

    return (
        <div className={ErrorDisplayStyles.errorDisplay}>

            <h2>Ohhh....</h2>
            <p>{props.message}</p>

            <Button onClick={handleErrorMessage}>Try again</Button>
        </div>
    )
}

export default ErrorDisplay
