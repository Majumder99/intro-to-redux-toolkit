import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/User";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button
          onClick={() => {
            dispatch(login({ name: "Sourav", age: 20, email: "m@gmail.com" }));
          }}
        >
          login
        </button>
        <button
          onClick={() => {
            dispatch(logout());
          }}
        >
          login
        </button>
      </div>
    </>
  );
};

export default Login;
