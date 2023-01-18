import { REQUIRED, validateName } from '../../../helpers/validate'
import { Input } from '../../Input'

export const FormNameField = ({
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {
    const onChange = (event) => {
        const {value} = event.target
        let errorMessage = validateName(value, {required})
        onError(errorMessage)
        propsOnChange(value)
    }

    return (
        <Input
        {...rest}
        onChange={onChange}
        required={required}
        />
    )
}