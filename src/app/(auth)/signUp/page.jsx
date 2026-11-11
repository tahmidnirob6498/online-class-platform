'use client'

import { authClient } from '@/app/lib/auth-client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignUp = () => {
  const {handleSubmit,register,formState:{errors},reset}=useForm()
  const handleSubmitfunc=async(formData)=>{
const {name,photo,email,password}=formData
const {data:res,error}=await authClient.signUp.email({
name,
image:photo,
email,
password,
callbackURL:"/"
})
if(res){
  toast.success("signup successfully")
  
reset()
}
 if(error){
  toast.error("Something is problem")
  
 }
}
 const handleButton=async()=>{
     const data=await authClient.signIn.social(
      {
        provider:"google"
      }
     )
 }

    return (
        <div className='flex justify-center min-h-[80vh]  mb-10'>
         <div className=" bg-[rgb(27,28,27)] min-w-87 h-80 md:w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleSubmitfunc)} className="fieldset">
               <label className="label required">Name</label>
          <input name='name' type="text" className="input" placeholder="Your name"
          {...register("name",{required:"Your name must be input"})}
          />
            {
            errors.name && <p className='text-red-600'>{errors.name.message}</p>
          }
          
          
          <label className="label">Photo Url</label>
          <input name='photo' type="text" className="input" placeholder="Photo Url" {...register("photo")}/>
            {
            errors.photo && <p className='text-red-600'>{errors.photo.message}</p>
          }
         <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email"  {...register("email",{required:"Your email must be input"})} />
          {
            errors.email && <p className='text-red-600'>{errors.email.message}</p>
          }
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password"  {...register("password",{required:"Your password must be input"})}/>
            {
            errors.password && <p className='text-red-600'>{errors.password.message}</p>
          }
          <button type='submit' className="btn btn-neutral mt-4">Sign Up</button>
        </form>
            <p className='divider'>or</p>
        <button onClick={handleButton} className="btn mx-auto w-50 text-center bg-[rgb(27,28,27)] text-white border-[rgb(151,247,34)] hover:bg-[rgb(42,44,42)]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button> 
      </div>
     
    </div></div>
    );
};

export default SignUp;