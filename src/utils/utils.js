export const isEmailValid = (email) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
}

export const isPasswordValid = (password) => {
    const passwordRegex = /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=(.*\d){2})(?=(.*[\W_]){2}).{8,}$/
    return passwordRegex.test(password)
}

export const getAlphabetOnly = (text) => {
    return text.replace(/[^a-z]/gi, '')
}

export const getNumericOnly = (text) => {
    return text.replace(/[^0-9]+/, '')
}