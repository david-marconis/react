import useInput from "../hooks/use-unput";

const SimpleInput = props => {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName
  } = useInput(name => name.trim() !== "");

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(email => email.includes("@"));

  const formIsValid = nameIsValid && emailIsValid;

  const submitHandler = event => {
    event.preventDefault();
    if (!formIsValid) {
      return; // Should not be possible without tampering
    }
    console.log(name);
    resetName();

    console.log(email);
    resetEmail();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${nameIsInvalid && " invalid"}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className={`form-control ${emailIsInvalid && " invalid"}`}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && <p className="error-text">Email is invalid!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
