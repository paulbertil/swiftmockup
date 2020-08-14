import React from 'react'

import MaxWidthContainerStyles from './MaxWidthContainer.module.scss'

const MaxWidthContainer = (props) => {
    return (
        <div className={MaxWidthContainerStyles.container}>
            {props.children}
        </div>
    )
}

export default MaxWidthContainer
