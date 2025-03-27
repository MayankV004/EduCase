import React from 'react'
import { Link } from 'react-router-dom'
function Page1() {
  return (
    <div className='login-container bg-gray-100 w-full h-screen flex flex-col justify-end md:justify-center md:items-center px-5 pb-5' >
        <div className='container w-full flex flex-col gap-3 md:w-1/4 md:p-4 md:rounded-lg shadow-md'>
            <div className='text-container w-3/4 flex flex-col gap-2 '>
                <span className='block text-2xl md:text-lg font-semibold'>
                    Welcome to PopX
                </span>
                <span className='block md:text-sm'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </span>
            </div>

            <div className='button-container md:text-xs flex flex-col justify-center items-center mb-2 gap-2 font-semibold'>
                <div className='bg-[#6C25FF] text-white w-full rounded-md h-10 flex justify-center items-center'>
                    <Link to={"/create-account"}>
                    <button>Create Account</button>
                    
                    </Link>
                </div>
                <div className='bg-[#6C25FF4B] w-full rounded-md h-10 flex justify-center items-center'>
                    <Link to={"/login"}>
                    
                    <button>Already Registered?Login</button>
                    </Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Page1;