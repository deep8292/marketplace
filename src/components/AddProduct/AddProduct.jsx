import BasePage from "../common/BasePage/BasePage";
import classes from './AddProduct.module.css';
import RetroButton, {RetroButtonType} from "../button/RetroButton";

import { useForm } from "react-hook-form"
import Dropdown from "../common/DropDown/DropDown";
import CurrencyInput from "../common/CurrencyInput/CurrencyInput";

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
                <label className={classes.labelStyle}>Description</label>
                <div className={classes.priceInputContainer}>
                    <div className={classes.Dropdown}> {/* Assign a class or id to the Dropdown */}
                        <Dropdown />
                    </div>
                    <div className={classes.inputContainer}>
                        {/* <input type="number" min="0.10" className={classes.inputStyle} placeholder="5.99" {...register("itemPrice", {required: "This field is required"})} /> */}
                        {/* <p className={classes.errorStyle}>{errors.password?.message}</p> */}
                        <CurrencyInput />
                    </div>
                </div>
            </div>

            {/* <div className={classes.inputContainer}>
            <label className={classes.labelStyle}>Price</label>
            <input className={classes.inputStyle} placeholder="--------" {...register("itemDesc", {required: "This field is required"})} />
            <p className={classes.errorStyle}>{errors.password?.message}</p>
            </div> */}
            
            <RetroButton type="submit" buttonType={RetroButtonType.BLUE}>
              Submit
            </RetroButton>
          </form>
        </div>
        </BasePage>
    );
}

export default AddProduct;