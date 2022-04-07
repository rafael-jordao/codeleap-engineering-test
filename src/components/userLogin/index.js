import React, { Component } from 'react';

import FormWithButton from '../FormItem/FormWithButton';



class UserLogin extends Component {

    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className='bg-light p-5'>
                        <FormWithButton 
                        title="Welcome to the CodeLeap Network"
                        buttonContent="ENTER"
                        labelcontent = "Please enter your username"
                        textplaceholder= "John Doeg"
                        />
                </div>
            </div>

        )
    }

}

export default UserLogin;
                    

























