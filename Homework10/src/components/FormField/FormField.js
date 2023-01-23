import React, {useId, useContext, useRef} from 'react';

import { Input } from '../Input';
import { PasswordInput } from '../PasswordInput'
import { useFormContext } from '../Form/Form';
import { FormNameField } from './FormNameField';
import { FormInput } from './FormInput';
import { FormPasswordField } from './FormPasswordField';
import { FormConfirmPasswordField } from './FormConfirmPasswordField';
import { FormCheckboxes } from './FormCheckboxes'

// import './FormField.css'

export const FormField = ({
    type,
    id: propsId,
    label,
    name,
    required,
    ...rest
}) => {
    const innerId = useId();
    const id = propsId || `FormField${innerId}`;

    const { isSubmitting, setValue, setError, errors } = useFormContext();

    const Component = useFormFieldComponent(type);

    const onChange = (value) => {
        setValue(name, value)
    }

    const onError = (errorMessage) => {
        setError(name, errorMessage)
    }

    const error = errors[name]

    return (
        <div className='FormField'>
            {type !== 'checkboxes' && (
                <label htmlFor={getInputId(id)}>{label}</label>
            )}
            <br></br>
            <Component
                {...rest}
                id={type === 'checkboxes' ? undefined : getInputId(id)}
                label={type === 'checkboxes' ? label : undefined}
                type={type}
                name={name}
                onChange={onChange}
                onError={onError}
                disabled={isSubmitting}
                aria-describedby={getErrorId(innerId)}
                required={required}
            />
            <br></br>
            {error && (
                <span id={getErrorId(innerId)}
                style={{color:'red'}}
                className="FormField__error"
                >
                {error}
                </span>
            )}
        </div>
    )
}

function useFormFieldComponent(type){
    switch (type) {
        // case 'password':
        //     return PasswordInput;
        case 'name':
            return FormNameField;
        case 'password':
            return FormPasswordField;
        case 'confirmPassword':
            return FormConfirmPasswordField;
        case 'checkboxes':
            return FormCheckboxes;
        default:
            return FormInput;
    }
}


function getErrorId(id) {
    return `${id}Error`;
}

function getInputId(id) {
    return `${id}Input`
}