import { useForm } from "react-hook-form"

import classes from '../styles/Register.module.css';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className={classes.inputContainer}>
      <label> First Name </label>
      <input placeholder="John" {...register("firstName", {required: "This is field is required"})} />
      <p className={classes.errorStyle}>{errors.firstName?.message}</p>
      </div>

      <div className={classes.inputContainer}>
      <label>Last Name</label>
      <input placeholder="Doe" {...register("lastName", {required: "This is field is required"})} />
      <p className={classes.errorStyle}>{errors.lastName?.message}</p>
      </div>
      
      <div className={classes.inputContainer}>
      <label>Email Address</label>
      <input placeholder="abc@email.com" {...register("email", {required: "Invalid email address", pattern: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i"})} />
      <p className={classes.errorStyle}>{errors.email?.message}</p>
      </div>
      
      <input type="submit" />
    </form>
  )
}

export default Register;