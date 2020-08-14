import React from 'react';
import LoadingIcon from '../components/loadingIcon';

import FormStyles from './Form.module.scss'

import Button from './Button'


const Form = (props) => {
    const {
        handleFormSubmit,
        url,
        handleInputChange,
        handleFormLoad,
        isFormSubmitted
    } = props;

    const onSubmitForm = (e) => {
        handleFormLoad(true);
        handleFormSubmit(e);
    }

    return (
        <form
            className={FormStyles.form}
            onSubmit={(e) => onSubmitForm(e)}
        >
            {!isFormSubmitted && (
                <div className={FormStyles.formGrid}>
                    <input
                        type="text"
                        name="url"
                        onChange={(e) => handleInputChange(e.target.value)}
                        value={url}
                        placeholder="type any url here"
                        className={FormStyles.formInput}
                    />
                    <Button>
                        Create mockup
                    </Button>
                </div>
            )}
            {isFormSubmitted && (
                // loading icon
                <LoadingIcon />
            )}
        </form>
    )
}
export default Form;