"use client"
import { authClient } from '@/app/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignIn = () => {
  const {register,formState:{errors},reset,handleSubmit}=useForm()
    const handleSubmitFunc=async(data)=>{
      const {email,password}=data
      const {data:res,error}=await authClient.signIn.email({
        email,
        password,
        callbackURL:"/"
      })
     if(res){
    toast.success("signin successfully")
   
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
         <div className='flex flex-col justify-center min-h-[80vh] md:items-center'>
             <div className=" bg-[rgb(27,28,27)] mx-auto w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleSubmitFunc)} className="fieldset">
       <input name='email' type="email" className="input" placeholder="Email"  {...register("email",{required:"Please fill the email properly"})} />
          {
            errors.email && <p className='text-red-600'>{errors.email.message}</p>}
         <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password"  {...register("password",{required:"Please fill the password properly"})}/>
            {
            errors.password && <p className='text-red-600'>{errors.password.message}</p>
          }
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-olive-300'>If you donot have an account? <Link href="/signUp" className='hover:underline'>Register</Link></p>
        </form>
      </div>
           <p className='divider'>or</p>
        <button onClick={handleButton} className="btn w-full mb-3  bg-[rgb(27,28,27)] text-white border-[rgb(151,247,34)] hover:bg-[rgb(42,44,42)]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button> 
    </div>

         </div>
    );
};

export default SignIn;