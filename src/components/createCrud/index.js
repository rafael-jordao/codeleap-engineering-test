import React, { useState } from "react";
import { FormGroup, Label, Input } from 'reactstrap'
import Garbage from "/Users/rafaeljordao/Documents/codeleap/src/assets/garbage-icon.png"
import Edit from "/Users/rafaeljordao/Documents/codeleap/src/assets/edit-icon.png"
import CreateNewContent from "../createNewContent";

const CreateCrud = () => {
    const [input, setInput] = useState();

    const onChange = (e) => {
        setInput(e.target.value)
    }

    return (
       
       <div className="container px-0 bg-light">
            <CreateNewContent/>

            <div className="container bg-dark d-flex align-items-center">
                <h2 className="p-3 text-light">My First Post at CodeLeap Network!</h2>
               
                <span className="container d-flex justify-content-end">
                   <img className=" p-3" src={Garbage}></img>
                   <img className=" p-3" src={Edit}></img>
                </span>

            </div>

        </div>
    )
}

export default CreateCrud;

