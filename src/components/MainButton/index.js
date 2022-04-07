import React, { Component } from "react";

import "./button.css"


function handleClick() {
    console.log('clicou')
}

class MainButton extends Component {
    constructor() {
        super();
        this.state = {
            Button: { textContent: '', isactive: ''}
        };

     

    }

    render() {
        return (
            <div className={"d-flex justify-content-end pt-3"} >
                <button
            
                    onClick={handleClick}>
                    {this.props.textContent}
                </button>
            </div>
        )
    }
}



export default MainButton;