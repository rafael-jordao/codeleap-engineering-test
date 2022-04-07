import React, { useState, Component } from "react";
import SinglePost from "../SinglePost";
import MainButton from "../MainButton";
import FormItem from "../FormItem";



class CreatePost extends Component {

    render() {
        return (
            <div className="container bg-light px-0">

                <div className="container bg-dark">
                    <h2 className="p-4 text-light">CodeLeap Network</h2>
                </div>

                <div className="container p-5">
                    <div className="container border border-black p-5">
                        <FormItem
                            placeHolder='Hello World'
                            title="What's on your mind?!"
                            label='Title'>
                        </FormItem>

                        <FormItem
                            placeHolder='Content here'
                            label='Content'
                            type='textarea'>
                        </FormItem>

                        <MainButton
                            textContent='CREATE' />

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






