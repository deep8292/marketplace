import BasePage from "../common/BasePage/BasePage";
import classes from './AddProduct.module.css';
import RetroButton, {RetroButtonType} from "../button/RetroButton";

import { useForm } from "react-hook-form"
import Dropdown from "../common/DropDown/DropDown";
import CurrencyInput from "../common/CurrencyInput/CurrencyInput";
import CheckboxWithText from "../common/CheckBox/Checkbox";
import { useState } from "react";

function AddProduct () {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [isDonation, setIsDonation] = useState(false);

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
                    <div className={classes.Dropdown}> 
                        <Dropdown isDisabled={isDonation} />
                    </div>
                    
                    <div className={classes.innerInputContainer}>
                        <CurrencyInput isDisabled={isDonation}/>
                    </div>                    
                </div>
            </div>
            <div className={classes.checkBoxContainer}>
                <CheckboxWithText updateCheckbox={setIsDonation}/>
            </div>

            <div className={classes.imageUploadContainer}>
                <div className={classes.imagePlaceholder}>
                    <p>+</p>
                </div>
                <div className={classes.imagePlaceholder}>
                    <p>+</p>
                </div>
                <div className={classes.imagePlaceholder}>
                    <p>+</p>
                </div>
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