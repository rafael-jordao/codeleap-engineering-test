import React, { useState } from "react";
import { Input, Label } from "reactstrap";

const CreatePost = () => {
    const [name, setName] = useState();

    const onChange = (e) => {
        setName(e.target.value)
    }

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
                        onChange={onChange}
                        value={name}
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
                        <button disabled={!name}>CREATE</button>
                    </div>
                </div>
            </div>



            <div className="container p-5">
                <div className="container bg-dark">
                    <h2 className="p-4 text-light">My First Post at CodeLeap Network!</h2>
                </div>
                <div className="container border border-black">
                    <div className="container align-items-center d-flex justify-content-between p-3">
                        <p><strong>@Victor</strong></p>
                        <p>25 minutes ago</p>
                    </div>
                    <p className="container">
                        Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                        Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
                    </p>
                </div>
            </div>

        </div >
    )
}

export default CreatePost;



