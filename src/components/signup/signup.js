// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { validate } from "./../validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./../toast";
import styles from "./Signup.module.css";
import { Link } from 'react-router-dom';

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setErrors(validate(data ,"signup"));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
    console.log(data);
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("ورود شما موفقیت امیز بود", "success");
      console.log(data);
    } else {
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
      notify("اطلاعات شما یافت نشد!", "error");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
          <h1 className={styles.header}>Sign Up</h1>
          <div className={styles.formField}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.name && touched.name
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.name && touched.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.formField}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.email && touched.email
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
          <div className={styles.formField}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.password && touched.password
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.password && touched.password && <span>{errors.email}</span>}
          </div>
          <div className={styles.formField}>
            <label>Confirm password</label>
            <input
              type="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              onFocus={focusHandler}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? styles.uncompleted
                  : styles.formInput
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </div>
          <div className={styles.formField}>
            <div className={styles["checkBoxContainer"]}>
              <label> I accept terms of privacy policy </label>
              <input
                type="checkbox"
                name="isAccepted"
                value={data.isAccepted}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div>
            {errors.isAccepted && touched.isAccepted && (
              <span>{errors.isAccepted}</span>
            )}
          </div>
          <div className={styles["formButtons"]}>
            <Link to="/login" >Login</Link>
            <button type="submit">Sign up</button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
