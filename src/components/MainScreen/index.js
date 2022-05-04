import React from "react";

import FormItem from "../FormItem";




const CreatePost = () => {


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
                        label='Title'
                        btnContent="CREATE">
                        
                    </FormItem>

                    

                </div>
            </div>

           

        </div >
    )

}

export default CreatePost;






