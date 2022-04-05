import React, { useState, Component } from "react";
import { Input, Label } from "reactstrap";
import SinglePost from "../SinglePost";


class CreatePost extends Component {

    render() {
        return (
            <div className="container bg-light px-0">
                <div className="container bg-dark">
                    <h2 className="p-4 text-light">CodeLeap Network</h2>
                </div>

                <div className="container p-5">
                    <div className="container border border-black p-5">
                        <h2 className="mb-3">
                            What's on your mind?
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

                <SinglePost title='My First Post at CodeLeap Network!'
                    userName='@Victor'
                    timeAgo='25 minutes ago'
                    paragraphContent='Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'/>

                <SinglePost title='Another Post Here'
                    userName='@Someone else'
                    timeAgo='2 days ago'
                    paragraphContent='Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                            Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.'/>

            </div >
        )
    }
}

export default CreatePost;






