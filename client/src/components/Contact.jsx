import React, {useState} from 'react';
// import '/css/style.css';
import Axios from 'axios';


function contact() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const submitMessage = () => {
    Axios.post('http://localhost:4000/api/insert', {
      name: name, 
      message: message,
      email: email
     
    }).then(() => {
      alert("successfully sent");
    });
  };

  const nameInputChangeHandler = (e) => {
    setName(e.target.value);
  }
  const messageInputChangeHandler = (e) => {
    setMessage(e.target.value)
  }
  const emailInputChangeHandler = (e) => {
    setEmail(e.target.value)
  }
  return (
    <div className="contact">

    <h1> Contact</h1>

        <div className='contact'>
        
          <label>name</label>
          <input type="text"
           name="name"onChange={nameInputChangeHandler}/>
          
        
          <label>message</label>
          <input type="text" name="message" onChange={messageInputChangeHandler}/>

          <label>email</label>
          <input type="text" name="message" onChange={emailInputChangeHandler}/>
         

          <button onClick={submitMessage}>Submit</button>
         </div>
     </div>
  );
};

export default contact;