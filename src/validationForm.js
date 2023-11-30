export const validation = (values, errors) => {
  Object.keys(values).forEach((key) => {
    if (!values[key]) {
      errors[key] = "Field is empty!";
    } else delete errors[key];
    if (values["firstName"].length <= 2) {
      errors["firstName"] = "First name should be longer than 2 letters!";
    }
    if (values["lastName"].length <= 2) {
      errors["lastName"] = "Last name should be longer than 2 letters!";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (values.email && !emailRegex.test(values.email)) {
      errors.email = "Email is not valid";
    }
  });
};
