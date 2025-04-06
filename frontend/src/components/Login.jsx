import React, { useState } from 'react'
import { assets } from '../assets/assets'

export const Login = () => {
  const [state, setState] = useState('Login')
  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form className='relative bg-white p-10 rounded-xl text-slate-500 w-full max-w-md shadow-xl'>
        <h1 className='text-center text-2xl text-neutral-700 font-medium'> {state} </h1>
        <p className='text-sm text-center'>Welcome back! Please sign in to continue</p>

        {/* Full Name */}
        {state !== 'Login' && <div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-5'>
          <img src={assets.profileIcon} className="w-8 h-8 object-contain" alt="Profile" />
          <input
            type='text'
            className='outline-none text-sm h-8 w-full bg-transparent'
            placeholder='Full Name'
            required
          />
        </div>}

        {/* Email */}
        <div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-4'>
          <img src={assets.emailIcon} className="w-8 h-8 object-contain" alt="Email" />
          <input
            type='email'
            className='outline-none text-sm h-8 w-full bg-transparent'
            placeholder='Email ID'
            required
          />
        </div>

        {/* Password */}
        <div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-4'>
          <img src={assets.lockIcon} className="w-8 h-8 object-contain" alt="Password" />
          <input
            type='password'
            className='outline-none text-sm h-8 w-full bg-transparent'
            placeholder='Password'
            required
          />
        </div>

        <p className='text-right mt-3 text-xs text-blue-500 cursor-pointer hover:underline'>Forgot Password?</p>

        <button className='bg-orange-400 w-full text-white py-2 rounded-full mt-2'> sign in with Google  </button>



        <button className='bg-blue-600 w-full text-white py-2 rounded-full mt-5'> {state === 'Login' ? 'login' : 'Create Account'}  </button>

        {state === 'Login' ? <p className='mt-5 text-center'> Don't have an account ? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign up</span></p>
          :
          <p className='mt-5 text-center'> Already have an account ? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')} >Login</span></p>}

        <img src={assets.crossIcon} alt="" className='absolute top-5 right-5 cursor-pointer' />
      </form>

    </div>
  )
}

export default Login