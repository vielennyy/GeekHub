import React from 'react'
import { Checkbox } from "../../Checkbox"
import { useFormContext } from '../../Form/Form'
import { REQUIRED } from '../../../helpers/validate'

export const FormCheckboxes = ({
    options,
    name,
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {

    const { values } = useFormContext()

    const onChange = (event) => {
        console.log('event', event.target.value)
        const value = event.target.value
        let arr = values[name] ? [ ...values[name]] : []
        console.log(values)
        if (arr.includes(value)) {
            arr = arr.filter(item => item !== value)
        } else {
            arr.push(value)
        }
        propsOnChange(arr)
        onError(required && arr.length === 0 ? REQUIRED : null)
    }

    return options.map((option) => (
        <>
            <Checkbox
                {...rest}
                key={String(option.value)}
                name ={name}
                value={option.value}
                label ={option.label}
                onChange={onChange}
            />
            <br></br>
        </>
        
    ))
}