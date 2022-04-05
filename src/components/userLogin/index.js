import React, { useState, Component } from 'react';
import "/Users/rafaeljordao/Documents/codeleap/src/index.css"
import MainButton from '../MainButton';
import FormItem from '../FormItem';


class UserLogin extends Component {

    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className='bg-light p-5'>
                    <FormItem
                        placeHolder='John Doe'
                        title='Welcome to the CodeLeap network!'
                        label='Please enter your name'>
                    </FormItem>

                    <MainButton textContent='ENTER'></MainButton>
                </div>
            </div>

        )
    }

}

export default UserLogin;

















