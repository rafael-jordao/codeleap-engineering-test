import React, { Component } from "react";
import Edit from '/Users/rafaeljordao/Documents/codeleap/src/assets/edit-icon.svg';
import Garbage from '/Users/rafaeljordao/Documents/codeleap/src/assets/garbage-icon.svg';

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SinglePost: { title: '', userName: '', timeAgo:'', paragraphContent:''},
        };
    }
    
    render() {
        return (

            <div className="container p-5">
                <div className="container bg-dark">
                    <div className="container align-items-center d-flex justify-content-between ">
                        <h2 className="p-4 text-light">{this.props.title}</h2>
                        <div className="d-flex" >
                            <span role="button">
                                <img className=" px-3" src={Garbage}></img>
                            </span>
                            <span role="button">
                                <img className="px-3" src={Edit}></img>
                            </span>
                        </div>
                    </div>

                </div>

                <div className="container border border-black">
                    <div className="container align-items-center d-flex justify-content-between p-3">
                        <p><strong>{this.props.userName}</strong></p>
                        <p className="text-secondary">{this.props.timeAgo}</p>
                    </div>
                    <p className="container">
                        {this.props.paragraphContent}
                    </p>
                </div>
            </div>
        )
    }

}

export default SinglePost;
    
    