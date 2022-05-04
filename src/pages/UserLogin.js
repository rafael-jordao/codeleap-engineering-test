import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormItem from '../components/FormItem';
import MainButton from '../components/MainButton';

const UserLogin = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('')

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleClickName = (e) => {
        e.preventDefault()
        setName(e.target.value)
        setName('')
        localStorage.setItem('userName', name)
        navigate('/mainscreen')
        console.log(name)
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className='bg-light p-5'>
                <FormItem
                    placeHolder='John Doe'
                    title='Welcome to the CodeLeap network!'
                    label='Please enter your name'
                    handleChange={handleChangeName}
                    theValue={name}
                />

                <MainButton
                    handleClick={handleClickName}
                    btnContent='ENTER'
                    isDisabled={!name}></MainButton>
            </div>
        </div>

    )
}

export default UserLogin;