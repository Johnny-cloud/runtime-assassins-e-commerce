import React, { useState } from 'react'

function ContactUs() {
  const [formData, setFormData] = useState({
    userName : "",
    userEmail : "",
    userMessage : ""
  })
  function resetForm(){
    setFormData({
      userName : "",
      userEmail : "",
      userMessage : ""
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
    resetForm();
  }
  function handleChange(event){
    setFormData({...formData, [event.target.name]:event.target.value})
  }
  return (
    <div className='container'>
        
        <div className='contact'>
        <h1>We would love to hear from you!</h1>
          <p>
            For questions regarding our products and services you can also contact us by filling out the form below.
          </p>
        </div>
  
          <form onSubmit={handleSubmit}>
            <label>
              Name <span><input className='form-input' type='text' name="userName" value={formData.userName} onChange={handleChange}></input></span>
            </label>
            <label>
              Email  <span><input className='form-input' type='email' name="userEmail" value={formData.userEmail} onChange={handleChange}></input></span>
            </label>
            <label>
              Message  <span><textarea className='form-input' type='text' name="userMessage" value={formData.userMessage} onChange={handleChange}></textarea></span>
            </label>
            <button>Submit</button>
          </form>
      
      
    </div>
  )
}

export default ContactUs