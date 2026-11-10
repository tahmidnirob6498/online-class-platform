import Link from 'next/link';
import React from 'react';

const SignIn = () => {
    return (
         <div className='flex justify-center min-h-[80vh] md:items-center'>
             <div className=" bg-[rgb(27,28,27)] min-w-87 h-80 md:w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-olive-300'>If you donot have an account? <Link href="/signUp" className='hover:underline'>Register</Link></p>
        </fieldset>
      </div>
    </div>
         </div>
    );
};

export default SignIn;