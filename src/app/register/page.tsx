import React from 'react'
import balletAndBooks from '../../../assets/balletAndBooks.jpg'
import google from '../../../assets/google.png'
import Link from 'next/link';

function RegisterScreen() {
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
              {/* <h1 className='w-full text-xl text-[#060606] max-w-[500px] mx-auto mr-auto font-semibold'>Ballet & Books</h1> */}
  
              <div className='w-full flex flex-col max-w-[500px]'>
                  <div className='w-full flex flex-col mb-2'>
                    <h3 className='text-3xl font-semibold mb-2 text-[#060606]'>Time to Sign Up</h3>
                    <div className="mb-4 mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Username
                        </label>
                        <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text"/>
                    </div>
                    <div className='flex flex-row gap-2 justify-between' >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                First Name
                            </label>
                            <input className="shadow appearance-none border py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text"/>
                        </div>
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Last Name
                        </label>
                        <input className="shadow appearance-none border py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text"/>
                    </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        {/* <input className="hidden js-password-toggle" id="toggle" type="checkbox" />
                        <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">show</label> */}
                        <input className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" autoComplete='off'/>
                    </div>
                    <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            How would you describe yourself?
                        </label>
                    </div>
                    {/* <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label> */}
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Select an option</option>
                        <option value="adminMember">Admin Member</option>
                        <option value="mentor">Mentor</option>
                        <option value="studentLeader">Student Leader</option>
                        </select>
                  </div>
  
              </div>

              <div className='flex flex-col gap-y-4'>
                    <div className='text-sm'>
                        <p>Agree to Terms and Conditions</p>
                    </div>

                    <div className='text-sm w-full flex items-center justify-center'>

                            <div className='font-semibold underline underline-offset-2 cursor-pointer'>
                                <Link href='/'>Back to Sign In</Link>
                            </div>
                    </div>
              </div>
              
          </div>
      </div>
    )

}

export default RegisterScreen