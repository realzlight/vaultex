import React from 'react'
import './Login.css'
import AuthUI from '../components/AuthUI'

function Login(props){
  
  function Login() {
  const handleSubmit = () => {
    console.log("Submit clicked")
  }
  
  
  return (
    <div className="LoginContainer">
      <AuthUI
      title="Log in to your account"
      buttonText="Continue"
      footerText="Don't have an account?"
      footerLink="/signup"
      footerLinkText="Create your account"
      onSubmit={handleSubmit}
    />
      
      
      
      
      
      
    </div>
  )
}

export default Login