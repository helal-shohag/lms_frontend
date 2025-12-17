import React from 'react'
import {User,Lock,Mail  } from 'lucide-react'
function Register() {
  const handleSubmit = (e) =>{
      }
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h2 className='mt-5 text-4xl mb-5 text-emerald-600 font-bold'>Register</h2>
      <div className='max-w-md w-full bg-white p-8 rounded-lg shadow-md'>
       <form onSubmit={handleSubmit}>
        <div className='relative mb-4'>
          <User size={15} className='absolute left-4 top-3'/>  
          <input type='text' name='username' className='pl-10 pr-4 rounded-2xl w-full h-10 border border-teal-300' placeholder='Username'/>    
        </div>
        <div className='relative mb-4'>
          <Mail size={15} className='absolute left-4 top-3'/>  
          <input type='text' name='email' className='pl-10 pr-4 rounded-2xl w-full h-10 border border-teal-300' placeholder='E-mail'/>    
        </div>
        <div className='relative mb-4'>
          <Lock size={15} className='absolute left-4 top-3'/>  
          <input type='text' className='pl-10 pr-4 rounded-2xl w-full h-10 border border-teal-300' placeholder='Password'/>    
        </div>
        <button className='w-full bg-emerald-600 text-white p-2'>Submit</button>
      </form>
      </div>
      
    </div>
  )
}

export default Register
