import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = request("/api/v1/auth/register", "POST", { ...form });
    } catch (err) {}
  };

  const loginHandler = async () => {
    try {
      const data = request("/api/v1/auth/login", "POST", { ...form })
      data.then(({data})=>{
        //   console.log("result ", data)
        auth.login(data.token, data.userId)
      })
    //   console.log("data from AuthPage ", data)
    //   auth.login(data.token, data.userId)
    } catch (err) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Minimize your link</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div>
              <div className="input-field">
                <input
                  placeholder="Type your email"
                  id="email"
                  type="text"
                  className="yellow-input"
                  value={form.email}
                  name="email"
                  onChange={changeHandler}
                />
                <label htmlFor="email" className="active">
                  Email
                </label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Type your password"
                  id="password"
                  type="password"
                  value={form.password}
                  className="yellow-input"
                  name="password"
                  onChange={changeHandler}
                />
                <label htmlFor="password" className="active">
                  Password
                </label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              disabled={loading}
              onClick={loginHandler}
            >
              Log in
            </button>
            <button
              className="btn grey lighten-1 black-text"
              onClick={registerHandler}
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
