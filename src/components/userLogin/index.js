import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap'
import "/Users/rafaeljordao/Documents/codeleap/src/index.css"
import "./button.css"


const UserLogin = () => {


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100 p-5">

            <FormGroup className="bg-light p-5 ">
                <Label for="exampleEmail">
                    <h2 className="pb-4">
                        Welcome to the CodeLeap network!
                    </h2>
                    <p>
                        Please enter your name
                    </p>
                </Label>
                <Input
                    id="exampleEmail"
                    name="name"
                    placeholder="Jhon Doe"
                    type="text"
    
                />
                <div className="d-flex justify-content-end pt-3">
                    <button>ENTER</button>
                </div>
            </FormGroup>
        </div>
    )
}

export default UserLogin;






