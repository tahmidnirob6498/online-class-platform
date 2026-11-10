import React from 'react';

const SignUp = () => {
    return (
        <div className='flex justify-center min-h-[80vh] md:items-center'>
         <div className=" bg-[rgb(27,28,27)] min-w-87 h-80 md:w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
               <label className="label required">Name</label>
          <input type="text" className="input" placeholder="Email" />
          <label className="label">Photo Url</label>
          <input type="text" className="input" placeholder="Photo Url" />
         <label className="label required">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </div>
    </div></div>
    );
};

export default SignUp;