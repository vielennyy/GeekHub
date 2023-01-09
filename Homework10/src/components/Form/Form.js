import React from 'react'
import { useRef, useState } from "react"


export const Form = ({
    onSubmit: propsOnSubmit,
    children,
    ...rest
}) => {
    const formRef = useRef()

    const[isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(formRef.currrent);
        const values = serialize(formData);

        try {
            if(propsOnSubmit) {
                await propsOnSubmit(values);
            }
        } catch (error) {
            console.error(error);
            alert('The requested action was not successful');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form 
            {...rest}
            ref={formRef}
            onSubmit={onSubmit}
        >
            {children}
        </form>
    )

}


function serialize(data) {
    let obj = {};
    for (let [key, value] of data) {
        if (obj[key] !== undefined) {
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            obj[key].push(value);
        } else {
            obj[key] = value;
        }
    }
    return obj;
}