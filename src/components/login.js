import React, { useState } from "react";

const Login = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const username = { name: enteredUsername };

    props.onSubmitSave(username);
    setEnteredUsername("");
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="row">
      <div className="p-4">
        {!isEditing && (
          <button
            className="btn btn-primary px-2"
            onClick={startEditingHandler}
          >
            Log In
          </button>
        )}
        {isEditing && (
          <form>
            <div className="mb-3">
              <label className="form-label text-white">Username</label>
              <input
                className="form-control"
                type="text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                className="btn btn-secondary btn-sm"
                type="button"
                onClick={stopEditingHandler}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary btn-sm"
                type="submit"
                onClick={submitHandler}
              >
                Log In
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default Login;
