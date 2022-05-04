import React, { useState } from "react";
import FormItem from "../components/FormItem";
import MainButton from "../components/MainButton";
import SinglePost from "../components/SinglePost";


const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const [list, setList] = useState([]);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangePost = (e) => {
        setPost(e.target.value);
    }

    const handleClickInputs = (e) => {
        e.preventDefault();
        setTitle(e.target.value);

        setList([...list, { title: title, id: Math.random(), content: post }]);

        setTitle('');

        setPost('');

    };


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
                        btnContent="CREATE"
                        theType='text'
                        handleChange={handleChangeTitle}
                        theValue={title}>

                    </FormItem>

                    <FormItem
                        handleChange={handleChangePost}
                        theType='textarea'
                        theValue={post}
                    />


                    <MainButton
                        btnContent='CREATE'
                        handleClick={handleClickInputs}
                        isDisabled={!post || !title} />
                </div>
            </div>

            <ul>

                {list.map((task) => {
                    return (
                        <div className="taskContainer" key={task.id}>
                            <li>
                                {<SinglePost
                                    title={task.title}
                                    paragraphContent={task.content}
                                />}
                            </li>
                        </div>
                    )
                })}
            </ul>

        </div >

    )

}



export default CreatePost;







