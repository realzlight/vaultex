import React from 'react'
import './Signin.css' // you had 'Singin.css' typo here too
import AuthUI from '../components/AuthUI'

function Signin() {
  const handleSubmit = () => {
    console.log("Submit clicked")
  }

  return (
    <div className="SigninContainer">
      <AuthUI
        title="Create your account"
        buttonText="Continue"
        footerText="Already have an account?"
        footerLink="/login"
        footerLinkText="Log in to your account"
        onSubmit={handleSubmit}
      />
    </div> // <- closed this
  ) // <- closed return
}
export default Signin