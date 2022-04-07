import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";
import MainButton from "../MainButton";

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FormItem: { placeHolder: '', type: '', label: '', title: ''},
        };
    }

    render() {
        return (
            <div>
                <FormGroup>
                    <h2 className="mb-4">{this.props.title}</h2>
                    <Label >{this.props.label}</Label>
                    <Input
                        placeholder={this.props.placeHolder}
                        type={this.props.type}
                        className="input-group mb-3"

                    />

                </FormGroup>
            </div>


        );

    }
}


export default FormItem;
