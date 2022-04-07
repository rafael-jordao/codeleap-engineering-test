import React, { Component } from "react";
import FormItem from "../FormItem";
import MainButton from "../MainButton";

class FormGroupButton extends Component {
    render() {
        return (
            <>

                <FormItem
                    placeHolder='Content here'
                    label='Content'
                    type='textarea'>
                </FormItem>
                <MainButton
                    textContent='CREATE'>

                </MainButton>

            </>
        )
    }
}

export default FormGroupButton;