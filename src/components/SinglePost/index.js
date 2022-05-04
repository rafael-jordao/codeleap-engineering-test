import React, { Component } from "react";
import Edit from '//Users/rafaeljordao/Documents/my-codes/codeleap/src/assets/edit-icon.svg';
import Garbage from '/Users/rafaeljordao/Documents/my-codes/codeleap/src/assets/garbage-icon.svg';

const SinglePost = ({title, userName, timeAgo, paragraphContent}) => {

    return (

        <div className="container p-5">
            <div className="container bg-dark">
                <div className="container align-items-center d-flex justify-content-between ">
                    <h2 className="p-4 text-light">{title}</h2>
                    <div className="d-flex" >
                        <span role="button">
                            <img alt="iconGarbage" className=" px-3" src={Garbage}></img>
                        </span>
                        <span role="button">
                            <img alt="Icon Edit" className="px-3" src={Edit}></img>
                        </span>
                    </div>
                </div>

            </div>

            <div className="container border border-black">
                <div className="container align-items-center d-flex justify-content-between p-3">
                    <p><strong>{userName}</strong></p>
                    <p className="text-secondary">{timeAgo}</p>
                </div>
                <p className="container">
                    {paragraphContent}
                </p>
            </div>
        </div>
    )


}

export default SinglePost;

