import { validateConfirmPassword } from "../../../helpers/validate";
import { useFormContext } from "../../Form/Form";
import { PasswordInput } from "../../PasswordInput";


export const FormConfirmPasswordField = ({
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {
    const { values } = useFormContext()
    const { password } = values
    const onChange = (event) => {
        const {value} = event.target;
        onError(validateConfirmPassword(password, value))
        propsOnChange(value)
    }

    return (
        <PasswordInput
        {...rest}
        required={required}
        onChange={onChange}
        />    
    )
}