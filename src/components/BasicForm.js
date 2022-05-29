import useInput from "../Hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    valueChangeHandler: handleFirstNameHandler,
    inputBlurHandler: handleFirstNameBlur,
    reset: resetFirstName,
    hasError: firstNameHasError,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    valueChangeHandler: handleLastNameHandler,
    inputBlurHandler: handleLastNameBlur,
    reset: resetLastName,
    hasError: lastNameHasError,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: handleEmailHandler,
    inputBlurHandler: handleEmailBlur,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={handleFirstNameHandler}
            onBlur={handleFirstNameBlur}
          />
          {firstNameHasError && (
            <p className="error-text">Please enter a valid firstName</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={handleLastNameHandler}
            onBlur={handleLastNameBlur}
          />
          {lastNameHasError && (
            <p className="error-text">Please enter a valid lastName</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailHandler}
          onBlur={handleEmailBlur}
        />
        {emailHasError && (
          <p className="error-text">Please enter a valid Email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
