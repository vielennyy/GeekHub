import React from 'react';

import { useState } from 'react';

import { classNames } from '../../helpers/css';

import '../../helpers/css';

export const PasswordInput = ({ className, ...rest }) => {
    const [showPassword, setShowPassword] = useState(false)

    // const Icon = showPassword ? Eye : EyeSlash

    return (
        <span classNames={(className, 'PasswordInput')}>
            <input
            className='PasswordInput__Input'
            {...rest}
            type={showPassword ? 'text' : 'password'}
            />
            {/* <button
                type = 'button'
                className='PasswordInput__toggle'
                onClick={() => setShowPassword(!showPassword)}
                aria-label='toggle show password'
            >
                <Icon className='PasswordInput__icon'/>
            </button> */}
        </span>
    )
}

// const Eye = (props) => (
//     <svg {...props} 
// )