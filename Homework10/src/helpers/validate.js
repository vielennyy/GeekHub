export const NAME_REGEXP = /^[A-Z]+[a-z]{2,}/;
export const PASSWORD_REGEXP = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

const REQUIRED = 'required';

export function validateName(value, required) {
    const result = []
    if(required && !value) {
        result.push(REQUIRED)
    }
    if (value && !NAME_REGEXP.test(value)) {
        result.push('Name hasn\'t include special characters')
    }
    if (value && value.length < 2) {
        result.push('Length more than 2')
    }
    return result.length === 0 ? null : result.join('. ')
}

export function validatePassword(value, { required }) {
    const result = []
    if(required && !value) {
        result.push(REQUIRED)
    }
    if (value && !PASSWORD_REGEXP.test(value)) {
        result.push('Password has include special characters, uppercase lettersand numbers')
    }
    if (value && value.length < 2) {
        result.push('Length more than 8')
    }
    return result.length === 0 ? null : result.join('. ')
}