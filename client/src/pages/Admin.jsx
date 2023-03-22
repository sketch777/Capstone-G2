import React from "react";
import "./Admin.css";

const Admin = () => {
  return (
    <div className='wrapper fadeInDown'>
      <div id='formContent'>
        <h2 className='active'> Sign In </h2>
        {/* <h2 Name='inactive underlineHover'>Sign Up </h2> */}

        <form action=''>
          <input
            type='text'
            className='fadeIn second'
            name='login'
            placeholder='login'
          />
          <input
            type='text'
            id='password'
            className='fadeIn third'
            name='login'
            placeholder='password'
          />
          <input type='submit' className='fadeIn fourth' value='Log In' />
        </form>
        <div id='formFooter'>
          <a className='underlineHover' href='#'>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};
export default Admin;
