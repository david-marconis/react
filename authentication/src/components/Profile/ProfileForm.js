import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import { ACCOUNTS_URL, API_KEY } from "../../constants";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const passwordInputRef = useRef();
  const { token: idToken } = useContext(AuthContext);
  const history = useHistory();
  const submitHandler = event => {
    event.preventDefault();
    const password = passwordInputRef.current.value;
    // add validation
    fetch(`${ACCOUNTS_URL}update?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken, password })
    }).then(() => {
      // Assume always succeeds
      history.replace("/");
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="6"
          ref={passwordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
