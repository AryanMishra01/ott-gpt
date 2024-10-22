export const checkValidData = (email,password,fullName) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isFullNameValid = /^[A-Za-z]{6,16}$/.test(fullName)

    if(!isEmailValid) return "Invalid Email ID";
    if(!isPasswordValid) return "Invalid Password"
    if(!isFullNameValid) return "Invalid User Name";
    return null
};

