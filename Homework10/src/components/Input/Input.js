import React from 'react';

import { classNames } from '../../helpers/css';

import '../../helpers/css';

export const Input = ({ className, ...rest }) => {
    return (
        <input
        {...rest}
        className={classNames(className, 'Input')}
        />
    );
}