import React, { useState } from "react";
import { FormGroup, Label, Input } from 'reactstrap'


const CreateNewContent = () => {
    const [input, setInput] = useState();

    const onChange = (e) => {
        setInput(e.target.value)
    }

    return (


        <div className="container-fluid">
            
            <div className="container bg-dark p-3">
                <h2 className="p-3 text-light">CodeLeap Network</h2>
            </div>

            <FormGroup className=" container bg-light p-5  ">
                <Label for="exampleEmail">
                    <h2 className="pb-4">What's on your mind?</h2>
                </Label>
                <Input
                    id="exampleName"
                    name="text"
                    placeholder="Hello World"
                    type="text"
                    onChange={onChange}
                    value={input}
                    className="mb-3"
                />

                <Label for="exampleText">
                    Text Area
                </Label>

                <Input
                    id="exampleText"
                    name="text"
                    type="textarea"
                    input="text"
                />

                <div className="d-flex justify-content-end pt-3">
                    <button disabled={!input}>CREATE</button>
                </div>
            </FormGroup>
        </div>

    )


}

export default CreateNewContent;