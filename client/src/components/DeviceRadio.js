import React from 'react'

import DeviceRadioStyles from './DeviceRadio.module.scss'

const DeviceRadio = (props) => {

    const {
        handleDeviceChange,
        name,
        label,
        value,
        defaultChecked
    } = props;



    return (
        <label className={DeviceRadioStyles.device} htmlFor={value}>
            {props.children}
            {label}
            <input
                className={DeviceRadioStyles.deviceRadio}
                onClick={(e) => handleDeviceChange(e.target.value)}
                defaultChecked={defaultChecked}
                type="radio" id={value} name={name} value={value} />

            <div className={DeviceRadioStyles.deviceCustomRadio}></div>
        </label>
    )
}

export default DeviceRadio
