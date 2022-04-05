import React, { Component } from "react";

import "/Users/rafaeljordao/Documents/codeleap/src/components/MainButton/button.css"

class MainButton extends React.Component {
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