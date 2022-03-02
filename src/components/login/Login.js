// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { validate } from "./../validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./../toast";
import styles from "./../signup/Signup.module.css";
 import  {Link} from 'react-router-dom'

export default function Login() {
  const [data, setData] = useState({
 
    email: "",
    password: "",
   
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});


  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);


  
  const changeHandler = (event) => {
    
      setData({ ...data, [event.target.name]: event.target.value });
  
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
      
        email: true,
        password: true,
       
      });
      notify("اطلاعات شما یافت نشد!", "error");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.formContainer}>
          <h1 className={styles.header}>Login</h1>

          <div className={styles.formField}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
              
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

          <div className={styles["formButtons"]}>
            <Link to="/signup">Sign up</Link>
            <button type="submit"></button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}
