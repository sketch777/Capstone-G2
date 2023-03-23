import React, { useState } from 'react';
import Axios from 'axios';
import "../pages/Admin.css";

function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const submitMessage = () => {
    Axios.post('http://localhost:4000/api/insert', {
      name: name,
      message: message,
      email: email,
    }).then(() => {
      alert('successfully sent');
    });
  };

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  };
  const messageInputChangeHandler = (e) => {
    setMessage(e.target.value);
  };
  const emailInputChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" onChange={nameInputChangeHandler} className="form-control" />

        <label>Message</label>
        <input type="text" name="message" onChange={messageInputChangeHandler}   className="form-control"/>

        <label>Email</label>
        <input type="text" name="email" onChange={emailInputChangeHandler}  className="form-control" />

        <button className='btn btn-white btn-lg' onClick={submitMessage}>SEND MESSAGE</button>
      </form>
    </div>
  );
}

export default Contact;
