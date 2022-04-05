import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import MainButton from "../MainButton";

class FormItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: { id: '', placeholder: '', type: ''},
        };
    }

    render() {
        return (
            <div className="container">
                <FormGroup>
                    <Input
                        id="exampleEmail"
                        name="name"
                        placeholder="String"
                        type="text"
                    />
                </FormGroup>

                <MainButton textContent='CREATE'></MainButton>
            </div>


        );

    }
}

export default FormItem;
