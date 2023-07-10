import { useForm } from "react-hook-form"

import classes from '../styles/Register.module.css';
import { useEffect, useState } from "react";

function Register({ isLoginPressed }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const [isLoginClicked, setLoginClicked] = useState(false);
  const [isRegisterClicked, setRegisterClicked] = useState(false);

  useEffect(() => {
    if (isLoginPressed && !isRegisterClicked) {
      setLoginClicked(true);
    } else {
      setRegisterClicked(true);
    }
  })

  const renderHeader = () => {
   return (
    <div className={classes.header}>
        <button className={isLoginClicked ? classes.headerButton : classes.headerButtonInactive}>Login</button>
        <button className={isRegisterClicked ? classes.headerButton : classes.headerButtonInactive}>Register</button>
    </div>
   );
  }


  return (
    <>
     {renderHeader()}
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className={classes.inputContainer}>
      <label>First Name</label>
      <input className={classes.inputStyle} placeholder="John" {...register("firstName", {required: "This is field is required"})} />
      <p className={classes.errorStyle}>{errors.firstName?.message}</p>
      </div>

      <div className={classes.inputContainer}>
      <label>Last Name</label>
      <input className={classes.inputStyle} placeholder="Doe" {...register("lastName", {required: "This is field is required"})} />
      <p className={classes.errorStyle}>{errors.lastName?.message}</p>
      </div>
      
      <div className={classes.inputContainer}>
      <label>Email Address</label>
      <input className={classes.inputStyle} placeholder="abc@email.com" {...register("email", {required: "Invalid email address", pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"})} />
      <p className={classes.errorStyle}>{errors.email?.message}</p>
      </div>
      
      <button className={classes.buttonStyle}>Submit</button>
    </form>
    </>
  )
}

export default Register;