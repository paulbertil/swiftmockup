import React from 'react'

import ButtonStyles from './Button.module.scss'

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={ButtonStyles.button}>
            {props.children}
        </button>
    )
}

export default Button
