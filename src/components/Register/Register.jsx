import { useForm } from "react-hook-form"

import classes from '../Register/Register.module.css';
import { useEffect, useState } from "react";
import RetroButton, {RetroButtonType}  from "../button/RetroButton";

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
  },[]);

  const renderHeader = () => {
   return (
    <div className={classes.header}>
        <button 
          className={isLoginClicked ? classes.headerButton : classes.headerButtonInactive}
          onClick={loginButtonHandler}
          >
            Login
        </button>
        <button 
          className={isRegisterClicked ? classes.headerButton : classes.headerButtonInactive}
          onClick={registerButtonHandler}
          >
            Register
        </button>
    </div>
   );
  }

  const loginButtonHandler = () => {
    setLoginClicked(true);
    setRegisterClicked(false);
  }

  const registerButtonHandler = () => {
    setLoginClicked(false);
    setRegisterClicked(true);
  }

  const renderRegisterFields = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className={classes.inputContainer}>
      <label className={classes.labelStyle}>First Name</label>
      <input className={classes.inputStyle} placeholder="John" {...register("firstName", {required: "This is field is required"})} />
      <p className={classes.errorStyle}>{errors.firstName?.message}</p>
      </div>

      <div className={classes.inputContainer}>
      <label className={classes.labelStyle}>Last Name</label>
      <input className={classes.inputStyle} placeholder="Doe" {...register("lastName", {required: "This is field is required"})} />
      <p className={classes.errorStyle}>{errors.lastName?.message}</p>
      </div>
      
      <div className={classes.inputContainer}>
      <label className={classes.labelStyle}>Email Address</label>
      <input className={classes.inputStyle} placeholder="abc@email.com" {...register("email", {required: "Invalid email address", pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"})} />
      <p className={classes.errorStyle}>{errors.email?.message}</p>
      </div>
      
      <RetroButton type="submit" buttonType={RetroButtonType.BLUE}>
        Submit
      </RetroButton>
    </form>
    );
  }

  const renderLoginFields = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
            
      <div className={classes.inputContainer}>
      <label className={classes.labelStyle}>Email Address</label>
      <input className={classes.inputStyle} placeholder="abc@email.com" {...register("email", {required: "Invalid email address", pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"})} />
      <p className={classes.errorStyle}>{errors.email?.message}</p>
      </div>

      <div className={classes.inputContainer}>
      <label className={classes.labelStyle}>Password</label>
      <input className={classes.inputStyle} placeholder="--------" {...register("password", {required: "This field is required"})} />
      <p className={classes.errorStyle}>{errors.password?.message}</p>
      </div>
      
      <RetroButton type="submit" buttonType={RetroButtonType.BLUE}>
        Submit
      </RetroButton>
    </form>
    );
  }


  return (
    <>
     {renderHeader()}
     {isLoginClicked ? renderLoginFields() : renderRegisterFields()}
    </>
  )
}

export default Register;