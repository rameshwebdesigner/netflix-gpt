export const checkValidData = (email, password) => {
    const emailValidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!emailValidation) return "Email is not valid"
    if (!passwordValidation) return "Password is not valid"
    return null;
}