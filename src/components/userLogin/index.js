import React, { useState } from 'react';
import FormItem from '../FormItem';
import MainButton from '/Users/rafaeljordao/Documents/my-codes/codeleap/src/components/MainButton/index.js'


const UserLogin = () => {

    const [name, setName] = useState('')

    const handleChangeFunction = (e) => {
        console.log('oi')
        setName(e.target.value)
    }

    const handleClickFunction = (e) => {
        e.preventDefault()
        setName(e.target.value)
        setName('')
        localStorage.setItem('userName', name)
        console.log(name)
    }


    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className='bg-light p-5'>
                <FormItem
                    placeHolder="John Doe"
                    label="Please enter your username"
                    title="Welcome to the CodeLeap Network!"
                    handleChange={handleChangeFunction}
                    theValue={name}>
                </FormItem>

                <MainButton
                    btnContent="ENTER"
                    isDisabled={!name}

                    handleClick={handleClickFunction} />


            </div>
        </div>
    )


}

export default UserLogin;



























