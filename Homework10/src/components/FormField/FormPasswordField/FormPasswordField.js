import { validatePassword } from "../../../helpers/validate";
import { PasswordInput } from "../../PasswordInput";


export const FormPasswordField = ({
    onChange: propsOnChange,
    onError,
    required,
    ...rest
}) => {
    const onChange = (event) => {
        const {value} = event.target;
        onError(validatePassword(value, {required}))
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