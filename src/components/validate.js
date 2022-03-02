export const validate = (data, type) => {
  const errors = {};



  if (!data.email) {
    errors.email = " Email Required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = " Email address  is  invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password Required";
  } else if (!data.password.lenght < 6) {
    errors.password = " Password need to be 6 character or more ";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
      if (!data.name.trim()) {
        errors.name = "Username Required";
      } else {
        delete errors.name;
      }
    if (!data.confirmPassword) {
      errors.confirmPassword = " Confirm the password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = " Password do not match";
    } else {
      delete errors.confirmPassword;
    }

    if (!data.isAccepted) {
      errors.isAccepted = "Accept Our Regulations ";
    } else {
      delete errors.isAccepted;
    }
    return errors;
  }
};
