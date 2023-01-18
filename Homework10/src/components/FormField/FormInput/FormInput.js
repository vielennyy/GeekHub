import { Input } from '../../Input'

export const FormInput = ({
    onChange: propsOnChange,
    ...rest
}) => {
    const onChange = (event) => {
        propsOnChange(event.target.value)
    }

    return (
        <Input
        {...rest}
        onChange={onChange}
        />
    )
}