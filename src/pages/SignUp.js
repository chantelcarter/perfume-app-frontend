import React from 'react'
import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUp = ({signUp}) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": {
        email: data.email,
        password: data.password,
        password_confirmation: data.password_confirmation
      }
    }
    signUp(userInfo)
    navigate("/")
    e.target.reset()
  }
  return (
    <div className='sign-content-body'>
      <div className='sign-form-container'>
        <h2>Sign Up</h2>
        <form className="sign-form" ref={formRef} onSubmit={handleSubmit}>
          <div className='sign-form-group-container'>
            <div className='sign-form-group'>
              <label>
                Email:{" "}
                <input
                  type="email"
                  name="email"
                  className="sign-form-input"
                  placeholder='email'
                />
              </label>
            </div>
            <div className='sign-form-group'>
              <label>
                Password:{" "}
                <input
                  type='password'
                  name='password'
                  className="sign-form-input"
                  placeholder='password'
                />
              </label>
            </div>
            <div className='sign-form-group'>
              <label>
                Confirm Password:{" "}
                <input
                  type='password'
                  name='password_confirmation'
                  className="sign-form-input"
                  placeholder='confirm password'
                />
              </label>
            </div>
          </div>
          <div className='sign-submit'>
            <input className='sign-submit-button' type='submit' value='submit'/>
          </div>
          <div>
            <hr/>
            Already registered?{" "}
            <NavLink to="/signin">
              Sign In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp