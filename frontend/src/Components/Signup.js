import React from 'react';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100' id="null">
      <div className='border border-4 p-5'>
        <form>
          <h2 style={{ color: 'black', fontFamily: 'italic' }} className='text-center'>Sign Up</h2>
          <hr style={{ color: 'whitesmoke' }}></hr>
          <div className='mb-3 d-flex'>
            <div>
              <label htmlFor='firstName'style={{color:'black'}}>First Name</label>
              <input type='text' placeholder='Enter your first name' name='firstName' className='form-control' />
            </div>
            <div className='ms-3'>
              <label htmlFor='lastName'style={{color:'black'}}>Last Name</label>
              <input type='text' placeholder='Enter your last name' name='lastName' className='form-control' />
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='Email'style={{color:'black'}}>Email</label>
            <input type='email' placeholder='Enter your email' name='Email' className='form-control' />
          </div>
          <div className='mb-3'>
            <label htmlFor='Password'style={{color:'grey'}}>Password</label>
            <input type='password' placeholder='Enter your password' name='Password' className='form-control' />
          </div>
          <div className='mb-3'>
            <input type='checkbox' />
            <label htmlFor='Checkbox' className='ms-2'style={{color:'black'}}>I accept the </label>
            <Link className='primary mx-2' > Terms of Use</Link>
            <label htmlFor='text'className='ms-2'style={{color:'black'}}>&</label>
            <Link className='primary mx-2' >Privacy Policy</Link>
         
           
            <br />
            <br />
          </div>
          <div className='d-grid'>
            <button className='btn btn-outline-primary'>Sign Up</button>
          </div>
          <div>
            <center>
            <label htmlFor='text'style={{color:'black'}}>Already have an account? </label> <Link className='text-black mx-2' to="/login"> Login Here </Link>
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
