import React, { useState } from "react";
import { Input, Label } from "reactstrap";
import SinglePost from "../SinglePost";

const CreatePost = () => {

    return (

        <div className="container bg-light px-0">
            <div className="container bg-dark">
                <h2 className="p-4 text-light">CodeLeap Network</h2>
            </div>

            <div className="container p-5">
                <div className="container border border-black p-5">
                    <h2 className="mb-3">
                        What’s on your mind?
                    </h2>
                    <Label>
                        Title
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="name"
                        placeholder="Hello World"
                        type="text"
                        className="mb-3"
                    />
                    <Label>
                        Content
                    </Label>

                    <Input type="textarea"
                        name="text"
                        id="exampleText"
                        placeholder="Content here"
                    />

                    <div className="d-flex justify-content-end pt-3">
                        <button>CREATE</button>
                    </div>
                </div>
            </div>

            <SinglePost />
            
            <SinglePost />
           
        </div >
    )
}

export default CreatePost;





