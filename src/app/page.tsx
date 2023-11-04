//import Link from 'next/link'
import React from 'react'
import balletAndBooks from '../../assets/balletAndBooks.jpg'
import google from '../../assets/google.png'
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';

const colors = {
    primary: "060606",
    background: "#E0E0E0",
    disbaled: "#D9D9D9",
}
//first div, min-h-screen makes photo cover half of screen
const LoginScreen = () => {
  return (
    <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col'>
            <div className='absolute top-[20%] left-[10%] flex flex-col'>
                <h1 className='text-4xl text-white font-bold my-4'>Learning through dance</h1>
                <p className='text-xl text-white font-normal'>Striving to reduce the literacy gap through dance and reading </p>
            </div>
            <img src={balletAndBooks.src} className='w-full h-full object-cover'/>
        </div>

        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
            <h1 className='w-full text-3xl text-[#060606] max-w-[500px] mx-auto mr-auto font-semibold mb-4'>Ballet & Books</h1>

            <div className='w-full flex flex-col max-w-[500px]'>
                <div className='w-full flex flex-col mb-2'>
                    <h3 className='text-xl font-semibold mb-2 text-[#060606]'>Login</h3>
                    <p className='text-base mb-2 text-[#060606]'>Welcome Back! Please enter your details</p>
                </div>

                <div className='w-full flex flex-col'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                    />
                </div>

                <div className='w-full flex items-center justify-between'>
                    <div className='w-full flex'>
                        <input type='checkbox' className='w-4 h-4 mr-2 cursor-pointer' />
                        <p className='text-sm text-[#060606]'>Remember Me for 30 days</p>
                    </div> 
                    <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 text-[#060606]'>Forgot Password?</p>
                </div>

                <div className='w-full flex flex-col my-4'>
                    <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        Login
                    </button>
                    <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                        Register
                    </button>
                </div>

                <div className='w-full flex items-center justify-center relative py-2'>
                    <div className='w-full h-[1px] bg-black'></div>
                    <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
                </div> 

                <div className='w-full text-[#060606] my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                    <img src={google.src} className='h-6 mr-2'/>
                    Sign in With Google
                </div>


            </div>

            <div className='w-full flex items-center justify-center gap-x-2'>
                <p className='text-sm font-normal text-[#060606]'>Don't have an account? 
                </p>                 
                 <div className='text-sm font-normal text-[#060606] underline underline-offset-2 cursor-pointer'>
                    <Link href='/register'> Sign up!</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginScreen



// import Link from "next/link";
// import LoginScreen from "./screens/page";
// //import RegisterScreen from "../../oldScreenFolder/RegisterScreen";
// export default function Home() {
//   return (
//     // <LoginScreen />
//     <div>
//     <Link href='/screens'>Click here to visit login page</Link>
//     <Link href='/register'>Click here to visit register page</Link>
//     </div>
//   )
// }
