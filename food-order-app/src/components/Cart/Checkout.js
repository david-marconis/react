import useInput from "../../hooks/use-unput";
import Input from "../UI/Input";
import classes from "./Checkout.module.css";

const isNotEmpty = value => value.trim() !== "";

const Checkout = props => {
  const {
    value: name,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName,
    touch: touchName
  } = useInput(isNotEmpty);
  const {
    value: street,
    valueIsValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    valueBlurHandler: streetBlurHandler,
    reset: resetStreet,
    touch: touchStreet
  } = useInput(isNotEmpty);
  const {
    value: city,
    valueIsValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    valueBlurHandler: cityBlurHandler,
    reset: resetCity,
    touch: touchCity
  } = useInput(isNotEmpty);
  const {
    value: postalCode,
    valueIsValid: postalCodeIsValid,
    hasError: postalCodeHasError,
    valueChangeHandler: postalCodeChangeHandler,
    valueBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCode,
    touch: touchPostalCode
  } = useInput(code => {
    const trimmedCode = code.trim();
    return trimmedCode.length === 4 && Number(trimmedCode);
  });

  const formIsValid =
    nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;

  const formSubmitHandler = event => {
    event.preventDefault();
    touchName();
    touchStreet();
    touchCity();
    touchPostalCode();
    if (formIsValid) {
      props.onConfirm({
        name: name.trim(),
        street: street.trim(),
        city: city.trim(),
        postalCode: postalCode.trim()
      });
      resetName();
      resetStreet();
      resetCity();
      resetPostalCode();
    }
  };

  const formCancelHandler = () => {
    props.onCancel();
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        className={`${classes.control} ${nameHasError && classes.invalid}`}
        label="Fullt navn"
        input={{
          id: "name",
          value: name,
          onBlur: nameBlurHandler,
          onChange: nameChangeHandler,
          errorText: nameHasError && "Navn kan ikke være tomt"
        }}
      />
      <Input
        className={`${classes.control} ${streetHasError && classes.invalid}`}
        label="Adresse"
        input={{
          id: "street",
          value: street,
          onBlur: streetBlurHandler,
          onChange: streetChangeHandler,
          errorText: streetHasError && "Adressen kan ikke være tom"
        }}
      />
      <Input
        className={`${classes.control} ${cityHasError && classes.invalid}`}
        label="Poststed"
        input={{
          id: "city",
          value: city,
          onBlur: cityBlurHandler,
          onChange: cityChangeHandler,
          errorText: cityHasError && "Poststed kan ikke være tomt"
        }}
      />
      <Input
        className={`${classes.control} ${
          postalCodeHasError && classes.invalid
        }`}
        label="Postnummer"
        input={{
          id: "postalCode",
          value: postalCode,
          onBlur: postalCodeBlurHandler,
          onChange: postalCodeChangeHandler,
          errorText: postalCodeHasError && "Ikke et gyldig postnummer"
        }}
      />
      <div className={classes.actions}>
        <button type="cancel" onClick={formCancelHandler}>
          Avbryt
        </button>
        <button type="submit">Bekreft ordre</button>
      </div>
    </form>
  );
};

export default Checkout;
