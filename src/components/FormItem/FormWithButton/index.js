import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';


class FormWithButton extends Component {
    state = {
        title: '',
        name: '',
        labelcontent: '',
        buttonContent: '',
        textplaceholder: '',
        typeofinput: '',
        classofinput: ''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value,

        })
    }

    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <Label className = "mt-3 mb-3">
                    {this.props.labelcontent}
                </Label>
                <Input
                    type={this.props.typeofinput}
                    placeholder={this.props.textplaceholder}
                    value={this.state.name} onChange={this.handleChange} />
                <div className="d-flex justify-content-end pt-3">
                    <button
                        disabled={this.state.name.length < 1}>{this.props.buttonContent}
                        </button>
                </div>
            </>

        )
    }

}



export default FormWithButton;