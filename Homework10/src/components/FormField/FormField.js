import React, {useId} from 'react';

import { Input } from '../Input/Input';
import { PasswordInput } from '../PasswordInput/PasswordInput'

// import './FormField.css'

export const FormField = ({
    type,
    id: propsId,
    label,
    ...rest
}) => {
    const innerId = useId();
    const id = propsId || `FormField${innerId}`;

    let Component;
    switch (type) {
        case 'password':
            Component = PasswordInput;
            break;
        default:
            Component = Input;
            break;
    }

    return (
        <div className='FormField'>
            <label htmlFor='id'>{label}</label>
            <Component
                {...rest}
                id={id}
                type={type}
            />
        </div>
    )
}