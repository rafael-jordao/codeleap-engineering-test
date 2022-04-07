import React, { Component } from "react";
import { FormGroup, Input, Label } from "reactstrap";

class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FormItem: { placeHolder: '', type: '', label: '', title: '', isDisabled: true },
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
                        isDisabled={this.props.isDisabled}
                    ></Input>
                </FormGroup>
            </div>


        );

    }
}

// function FormItem (props) {

//     return (
//         <div>
//                 <FormGroup>
//                     <h2 className="mb-4"></h2>
//                     <Label
//                     label={props.title}></Label>
//                     <Input
//                         placeholder={props.placeholder}

//                        className="input-group mb-3"></Input>
//                 </FormGroup>
//             </div>


//     )
// }

export default FormItem;
