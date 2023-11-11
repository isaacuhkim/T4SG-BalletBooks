//copy and past all of the sign in page template design from page.tsx here
'use client'
//import Link from 'next/link'
import React, { useState } from 'react'
import balletAndBooks from '../../../assets/balletAndBooks.jpg'
import google from '../../../assets/google.png'
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';

//first div, min-h-screen makes photo cover half of screen
const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const resetEmail = () => {
      sendPasswordResetEmail(auth, email);
    };
 
  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute top-[20%] left-[10%] flex flex-col'>
                <h1 className='text-4xl text-white font-bold my-4'>Learning Through Dance</h1>
                <p className='text-xl text-white font-normal'>its lit </p>
            </div>
            <img src={balletAndBooks.src} className='w-full h-full object-cover'/>
        </div>

        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
            <h1 className='w-full text-xl text-[#060606] max-w-[500px] mx-auto mr-auto font-semibold'>Ballet & Books</h1>

            <div className='w-full flex flex-col max-w-[500px]'>
                <div className='w-full flex flex-col mb-2'>
                    <h3 className='text-3xl font-semibold mb-2 text-[#060606]'>Reset Password</h3>
                    <p className='text-base mb-2 text-[#060606]'>Forgor ur password?</p>
                </div>

                <div className='w-full flex flex-col'>
                    <input
                        id="email"
                        name='email'
                        type='email'
                        placeholder='Email'
                        autoComplete='email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                    />
                
                </div>

                <div className='w-full flex flex-col my-4'>
                    <button 
                        onClick={() => resetEmail()}
                        disabled={!email}
                        className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPasswordScreen