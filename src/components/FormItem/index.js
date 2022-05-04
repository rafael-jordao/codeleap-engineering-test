import React from "react";
import { FormGroup, Input, Label } from "reactstrap";
import "/Users/rafaeljordao/Documents/my-codes/codeleap/src/components/MainButton/button.css"

const FormItem = ({ placeHolder, label, title, theValue, handleChange }) => {

    return (

        <div>
            <FormGroup>
                <h2 className="mb-4">{title}</h2>
                <Label >{label}</Label>
                <Input
                    placeholder={placeHolder}
                    type='text'
                    onChange={handleChange}
                    value={theValue}
                />
            </FormGroup>
        </div>



    );


}


export default FormItem;
