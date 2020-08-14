import React from 'react'

import LinkButtonStyles from './LinkButton.module.scss'

const LinkButton = (props) => {
    return (
        <a className={LinkButtonStyles.linkButton} href={props.href}>
            {props.children}
        </a>
    )
}

export default LinkButton
