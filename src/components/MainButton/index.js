import React, { Component } from "react";

import "./button.css"


function handleClick() {
    console.log('clicou')
}

class MainButton extends Component {
    constructor() {
        super();
        this.state = {
            Button: { textContent: '', isdisabled:{}}
        };
    }




    render() {
        return (
            <div className="d-flex justify-content-end pt-3" >
                <button
                disabled={this.props.isdisabled}
                >{this.props.textContent}</button>
            </div>
        )
    }
}



export default MainButton;