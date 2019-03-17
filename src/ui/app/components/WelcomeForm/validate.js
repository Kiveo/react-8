/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
export const validate = (values) => {
  const errors = {};
  // TODO: Validate that the user has entered a username, first name, and last name
  // since values are in an immutable map, values.valueName won't work well. Using .get('valueName') to select
  if (!values.get('firstname') || (!values.get('firstname').trim()) ) {
    // proptypes demand a bool value
    errors.firstname = true; 
  }
  if (!values.get('lastname') || (!values.get('lastname').trim()) ) {
    errors.lastname = true; 
  }
  if (!values.get('username') || (!values.get('username').trim()) ) {
    errors.username = true; 
  }

  return errors;
};
