import React from "react";

const LoginBox = () => {
  return (
    <>
      <form className="form-signin">
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        </div>

        <div className="form-label-group">
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autofocus=""
          />
          <label for="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
          />
          <label for="inputPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label className="d-flex align-items-center">
            <input type="checkbox" value="remember-me" />
            <span className="ml-2">Remember me</span>
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};

export default LoginBox;
