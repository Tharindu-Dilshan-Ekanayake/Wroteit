import React from 'react'
import SignupCompo from '../components/SignupCompo'
import CurrentUser from '../components/CurrentUser'

export default function SignupPage() {
  return (
    <div>
        <div className='flex items-center justify-center h-screen '>
            <div className='w-2/3 bg-[#19191a] h-screen'>
                <SignupCompo/>
            </div>
            <div className='w-1/3 bg-[#f1f1f1] h-screen'> 
                <CurrentUser/>
            </div>
        </div>
      
    </div>
  )
}
