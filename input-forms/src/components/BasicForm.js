import useInput from "../hooks/use-unput";

const isNotEmpty = value => value.trim() !== "";

const BasicForm = props => {
  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);
  const {
    value: lastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);
  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(email => email.includes("@"));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmitHandler = event => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(firstName, lastName, email);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={`form-control ${firstNameHasError && "invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        <div className={`form-control ${lastNameHasError && "invalid"}`}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className={`form-control ${emailHasError && "invalid"}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
