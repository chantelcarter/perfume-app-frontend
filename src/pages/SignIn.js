import React from 'react'
import { useRef } from "react"
import { useNavigate, NavLink } from "react-router-dom"

  const SignIn = ({ signIn }) => {
    const formRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault()
      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData)
      const userInfo = {
        user: { email: data.email, password: data.password },
      }
      try {
        await signIn(userInfo)
        navigate("/")
      } catch (error) {
        console.error(error)
      }
      e.target.reset()
    }
    return (
      <div className="sign-content-body">
        <div className='sign-form-container'>
          <h2>Log In To Your Account</h2>
          <form className="sign-form" ref={formRef} onSubmit={handleSubmit}>
            <div className='sign-form-group-container'>
              <div className='sign-form-group'>
                <label>
                  <input
                    type="email"
                    name="email"
                    className="sign-form-input"
                    placeholder="Enter E-mail Address"
                    required
                  />
                </label>
              </div>
              <div className='sign-form-group'>
                <label>
                  <input
                    type="password"
                    name="password"
                    className="sign-form-input"
                    placeholder="Enter Password"
                    required
                  />
                </label>
              </div>
            </div>
            <div className='sign-submit'>
              <input className="sign-submit-button" type="submit" value="Sign In" />
            </div>
            <div>
              <hr/>
              Not registered yet?{" "}
              <NavLink to="/signup">
                Sign Up
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    )
  }

export default SignIn