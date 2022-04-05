import React, { Component } from "react";

import "./button.css"

class MainButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Button: { textContent: '' },
        };
    }

    render() {
        return (
            <div className="d-flex justify-content-end pt-3">
                <button>{this.props.textContent}</button>
            </div>
        )
}}

export default MainButton;