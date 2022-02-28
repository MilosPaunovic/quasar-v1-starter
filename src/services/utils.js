/**
 * Validate required field
 * @param  {String} value Inputed value
 * @param  {String} label Start of the error string message
 * @returns {Boolean | String } Returns Boolean value if true or Error string if false
 */
const validateRequired = (value, label) => !!value || `${label} is a required field`;

/**
 * Validate format of sent email string
 * @param  {String} email Inputed address
 * @returns {Boolean | String } Returns Boolean value if true or Error string if false
 */
const validateEmail = (email) => {
  const pattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return pattern.test(email) || 'Please enter a valid email address';
};

/**
 * Validate number of password charactes
 * @param  {String} value Inputed value
 * @returns {Boolean | String } Returns Boolean value if true or Error string if false
 */
const validatePassword = (value, minimum = 6) => value.length >= minimum
  || `Password must containt at least ${minimum} characters`;

export { validateRequired, validateEmail, validatePassword };
