import React from 'react'

import Button from './Button'

import MockupDisplayStyles from './MockupDisplay.module.scss'
import LinkButton from './LinkButton'

const MockupDisplay = ({ mockupImage, url, handleMockupClean }) => {
    return mockupImage && (
        <>
            <div className={MockupDisplayStyles.display}>
                <img alt={`download mockup of ${url}`} src={mockupImage} />
            </div>
            <div className={MockupDisplayStyles.displayCta}>
                <Button onClick={handleMockupClean}>Generate new</Button>
                <LinkButton href={mockupImage}>Download mockup</LinkButton>
            </div>
        </>
    )
}

export default MockupDisplay
