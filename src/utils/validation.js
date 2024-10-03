const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const phoneRegex = /^[0-9]{10,}$/

const checkEmailFormat = (email) => {
  return emailRegex.test(email)
}

const checkPhoneFormat = (phone) => {
  return phoneRegex.test(phone)
}
export { checkEmailFormat, checkPhoneFormat }
