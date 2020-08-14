import React from 'react'

import PerkStyles from './Perk.module.scss'

const Perk = (props) => {
    return (
        <div className={PerkStyles.perk}>
            <div className={PerkStyles.perkUpper}>
                {props.children}
            </div>
            <div className={PerkStyles.perkLower}>
                <p>{props.textContent}</p>
            </div>

        </div>
    )
}

export default Perk
