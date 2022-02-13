import React, { useState } from "react";

export default function signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>Confirm password</label>
          <input type="password" name="confirmPassword" />
        </div>
        <div>
          <label> I accept terms of privacy policy </label>
          <input type="checkbox" name="isAccepted" />
        </div>
        <div>
          <a href="#">Login</a>
          <button type="submit">Sign up</button>
        </div>
      </form>
    </>
  );
}
