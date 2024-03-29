import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

import BasePage from "../common/BasePage/BasePage";
import classes from './AddProduct.module.css';
import gridClass from '../common/GridView.module.css';
import Dropdown from "../common/DropDown/DropDown";
import CurrencyInput from "../common/CurrencyInput/CurrencyInput";
import CheckboxWithText from "../common/CheckBox/Checkbox";
import RetroButton, {RetroButtonType} from "../button/RetroButton";

function AddProduct () {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [isDonation, setIsDonation] = useState(false);
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    const onSubmit = (data) => {
        console.log('Submitted data:', data);
    };

    const onImageChange = (e) => {
        setImages([...e.target.files, ...images]);
    }

    const onClickImage = (index) => {
        console.log('click image');
    }

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setImageURLs(newImageURLs);
    },[images]);
    

    return (
        <BasePage showRightButton={false}>
        <div className={classes.parentContainer}>
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
                <label className={classes.labelStyle}>Price Info</label>
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

            <div className={classes.inputContainer}>
                <label className={classes.labelStyle}>Select up to three pictures</label>
                <input 
                    className={classes.inputFileStyles}
                    type="file" multiple accept="image/*" 
                    onChange={onImageChange} 
                />
            </div>

            <div className={gridClass.containerUploadStyle}>
            {imageURLs.map((imgSrc, index) => 
                (
                    <div className={gridClass.itemContainerUploadStyle} key={index} onClick={() => onClickImage(index)}>
                        <img className={gridClass.imageUploadStyle} src={imgSrc} />
                    </div>
                )
            )}
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