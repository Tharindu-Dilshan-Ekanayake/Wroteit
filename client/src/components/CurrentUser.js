import React, { useState } from 'react'
import LOGO from '../images/LOGO.png'
import { Navigate } from 'react-router-dom';

export default function CurrentUser() {
  const [navigate, setNavigate] = useState(false);

  const Signin = () =>{
    setNavigate(true)
  }
  if (navigate) {
    return <Navigate to='/'/>
  }
  return (
    <div className='flex items-center justify-center h-screen'>
      <div>
        <div>
          <div className='absolute top-4 right-5 '>
            <img src={LOGO} alt='Logo' className='w-[250px]' />
          </div>
          <div>
          <div>
            <div>
              <h1 className='text-5xl text-[#19191A]'><strong>Start Your Journey</strong></h1>
              <label className='text-orange-500 text-1xl'><strong>Every great story starts with a single word. Write yours now!</strong></label>
            </div>
            <div className='pt-4'>
                <h2 className='text-2xl text-[#19191A]'>Do you have an account?</h2>
            </div>
            <div className='pt-5'>
                <button className='text-[#19191A] border-2 border-[#19191a] rounded-3xl w-[100px] h-12 hover:text-orange-500 hover:border-orange-500' onClick={Signin} >Sign In</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
