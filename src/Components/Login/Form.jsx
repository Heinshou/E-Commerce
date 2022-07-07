
import { useForm } from 'react-hook-form'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Form = () => {

    const { register, handleSubmit, reset } = useForm()
    const [isErrorLogin, setIsErrorLogin] = useState(false)

    const navigate = useNavigate()
  
    const submit = data => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
      axios.post(URL, data)
        .then(res => {
          localStorage.setItem('token', res.data.data.token)
          navigate('/')
        })
        .catch(err => {
          localStorage.removeItem('token')
          setIsErrorLogin(true)
          setTimeout(() => {
            setIsErrorLogin(false)
          }, 5000)
        })
        reset({
            email:'',
            password:''
        })
    }
  return (
    <form onSubmit={handleSubmit(submit)} className='login__form'>
        <ul className='login__test'>
          <li className='flex__login'>
            <b>Email:</b>mason@gmail.com
          </li>
          <li className='flex__login'><b>Contraseña:</b>mason1234</li>
        </ul>
        <h2 className="login__title">Enter your information</h2>
        <ul className="login__list">
          <li className="login__item">
            <label htmlFor="login-email" className="login__label">Email</label>
            <input
              type="email"
              className="login__input"
              id="login-email"
              {...register('email')}
            />
          </li>
          <li className="login__item">
            <label htmlFor="login-pass" className="login__label">Password</label>
            <input
              type="password"
              className="login__input"
              id="login-pass"
              {...register('password')}
            />
          </li>
        </ul>
        <div>
          {
            isErrorLogin && 'Invalid Credentials, try again...'
          }
        </div>
        <button>Login</button>
      </form>
  )
}

export default Form