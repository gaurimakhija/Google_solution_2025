import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Mail, Lock, X } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('Login');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <form className='relative bg-white dark:bg-zinc-900 p-10 rounded-2xl text-slate-600 dark:text-slate-200 w-full max-w-md shadow-2xl transition-all duration-300'>

        {/* Heading */}
        <h1 className='text-center text-3xl font-bold text-neutral-800 dark:text-white mb-1'>
          {state}
        </h1>
        <p className='text-sm text-center mb-6 text-gray-500 dark:text-gray-300'>
          Welcome back! Please sign in to continue
        </p>

        {/* Full Name (Sign Up Only) */}
        {state !== 'Login' && (
          <div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-2 focus-within:ring-2 focus-within:ring-orange-400'>
            <User size={20} className="text-gray-500" />
            <input
              type='text'
              className='outline-none text-sm h-8 w-full bg-transparent'
              placeholder='Full Name'
              required
            />
          </div>
        )}

        {/* Email */}
        <div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-4 focus-within:ring-2 focus-within:ring-orange-400'>
          <Mail size={20} className="text-gray-500" />
          <input
            type='email'
            className='outline-none text-sm h-8 w-full bg-transparent'
            placeholder='Email ID'
            required
          />
        </div>

        {/* Password with toggle */}
        <div className='border px-4 py-2 flex items-center gap-3 rounded-full mt-4 focus-within:ring-2 focus-within:ring-orange-400'>
          <Lock size={20} className="text-gray-500" />
          <input
            type={showPassword ? 'text' : 'password'}
            className='outline-none text-sm h-8 w-full bg-transparent'
            placeholder='Password'
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Forgot password */}
        <p className='text-right mt-3 text-xs text-blue-500 cursor-pointer hover:underline'>
          Forgot Password?
        </p>

        {/* Google Auth Button */}
        <button
          type="button"
          className='bg-orange-400 w-full text-white py-2 rounded-full mt-5 hover:bg-orange-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg'
        >
          {state === 'Login' ? 'Login' : 'Create Account'} with Google
        </button>

        {/* Main Auth Button */}
        <button
          type="submit"
          className='bg-blue-600 w-full text-white py-2 rounded-full mt-3 hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg'
        >
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {/* Toggle between Login/Signup */}
        <p className='mt-5 text-center text-sm text-gray-600 dark:text-gray-300'>
          {state === 'Login' ? (
            <>Don’t have an account?{' '}
              <span
                className='text-blue-600 dark:text-blue-400 cursor-pointer hover:underline'
                onClick={() => setState('Sign Up')}
              >
                Sign up
              </span>
            </>
          ) : (
            <>Already have an account?{' '}
              <span
                className='text-blue-600 dark:text-blue-400 cursor-pointer hover:underline'
                onClick={() => setState('Login')}
              >
                Login
              </span>
            </>
          )}
        </p>

        {/* Close button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className='absolute top-5 right-5 cursor-pointer text-gray-400 hover:text-red-500 transition'
        >
          <X size={22} />
        </button>
      </form>
    </div>
  );
};

export default Login;
