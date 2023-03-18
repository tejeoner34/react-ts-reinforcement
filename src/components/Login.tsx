import { useEffect, useReducer } from "react";

interface AuthState {
  username: string;
  name: string;
  token: null | string;
  validating: boolean;
}

const initialState: AuthState = {
  username: "",
  name: "",
  token: null,
  validating: true,
};

type AuthAction = { type: "logout" } | { type: "login" };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "login":
      return {
        username: "John01",
        name: "John",
        token: "token",
        validating: false,
      };
    case "logout":
      return {
        username: "",
        name: "",
        token: "",
        validating: false,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ name, token, validating }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      handleAuth({ type: "logout" });
    }, 1500);
  }, []);

  const handleAuth = (actionType: AuthAction) => {
    dispatch(actionType);
  };

  if (validating) {
    return (
      <>
        <h3>login</h3>
        <div className="alert alert-info">Validating...</div>
      </>
    );
  }

  return (
    <>
      <h3>login</h3>
      {token ? (
        <div>
          <div className="alert alert-success">Validated as: {name}</div>
          <button
            onClick={() => handleAuth({ type: "logout" })}
            className="btn btn-danger"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <div className="alert alert-danger">Not valid</div>
          <button
            onClick={() => handleAuth({ type: "login" })}
            className="btn btn-primary"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};
