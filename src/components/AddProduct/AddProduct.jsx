import BasePage from "../common/BasePage/BasePage";
import classes from './AddProduct.module.css';
import RetroButton, {RetroButtonType} from "../button/RetroButton";

import { useForm } from "react-hook-form"

function AddProduct () {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

      const onSubmit = (data) => {
        console.log('Submitted data:', data);
      };

    return (
        <BasePage>
        <div className={classes.container}>
            <form className={classes.formStyle} onSubmit={handleSubmit(onSubmit)}>
            
            <div className={classes.inputContainer}>
                <label className={classes.labelStyle}>Name</label>
                <input className={classes.inputStyle} placeholder="Your Product Name" {...register("itemName", {required: "This field is required"})} />
                <p className={classes.errorStyle}>{errors.email?.message}</p>
            </div>
      
            <div className={classes.inputContainer}>
            <label className={classes.labelStyle}>Description</label>
            <textarea className={classes.textAreaStyle}  placeholder="Share some details about your product..." {...register("itemDesc", {required: "This field is required"})} />
            <p className={classes.errorStyle}>{errors.password?.message}</p>
            </div>

            <div className={classes.inputContainer}>
            <label className={classes.labelStyle}>Price</label>
            <input className={classes.inputStyle} placeholder="--------" {...register("itemDesc", {required: "This field is required"})} />
            <p className={classes.errorStyle}>{errors.password?.message}</p>
            </div>
            
            <RetroButton type="submit" buttonType={RetroButtonType.BLUE}>
              Submit
            </RetroButton>
          </form>
        </div>
        </BasePage>
    );
}

export default AddProduct;