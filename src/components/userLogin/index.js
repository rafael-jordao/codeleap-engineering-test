import React, { useState, Component } from 'react';
import "/Users/rafaeljordao/Documents/codeleap/src/index.css"
import MainButton from '../MainButton';
import FormItem from '../FormItem';




const UserLogin = () => {

   
    
        return (
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className='bg-light p-5'>
                    <FormItem
                        placeHolder='John Doe'
                        title='Welcome to the CodeLeap network!'
                        label='Please enter your name'
                        
                    />

                    <MainButton
                    textContent='ENTER'></MainButton>
                </div>
            </div>

        )
    

}

export default UserLogin;






















