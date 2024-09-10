import React from 'react'
import LoginCompo from '../components/LoginCompo'
import Newuser from '../components/Newuser'


export default function Login() {
  return (
    <div>
      
      <div className='flex items-center justify-center h-screen '>
            <div className='w-1/3 bg-[#19191a] h-screen'>
                <Newuser/>
            </div>
            <div className='w-2/3 bg-[#f1f1f1] h-screen'>
            <div>
                    <LoginCompo/>
                </div>
            </div>
      </div>
        
    </div>
  )
}
