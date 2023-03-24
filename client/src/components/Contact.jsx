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
    <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' id='contactForm' novalidate>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required='required'
                        onChange={nameInputChangeHandler}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required='required'
                        onChange={emailInputChangeHandler}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={messageInputChangeHandler}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button
                  type='submit'
                  className='btn btn-custom btn-lg'
                  onClick={submitMessage}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h4>Contact Info</h4>
              <p>
                <span>Address</span>123 Main St,
                <br />
                San Francisco, CA 12345
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>Phone</span> +1 123 456 1234
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>Email</span> info@company.com
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href='#'>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-google-plus'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Contact;
