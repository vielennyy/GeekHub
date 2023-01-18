import React, {useId, useContext, useRef} from 'react';

import { Input } from '../Input';
import { PasswordInput } from '../PasswordInput'
import { useFormContext } from '../Form/Form';
import { FormNameField } from './FormNameField';
import { FormInput } from './FormInput';
import { FormPasswordField } from './FormPasswordField';

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
            <label htmlFor={getInputId(id)}>{label}</label>
            <Component
                {...rest}
                id={id}
                type={type}
                name={name}
                onChange={onChange}
                onError={onError}
                disabled={isSubmitting}
                aria-describedby={getErrorId(innerId)}
                required={required}
            />
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
        case 'password':
            return PasswordInput;
        case 'name':
            return FormNameField;
        case 'password':
            return FormPasswordField;
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