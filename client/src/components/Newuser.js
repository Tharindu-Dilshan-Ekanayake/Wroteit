import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


export default function Newuser() {
  const [navigate, setNavigate] = useState(false);

  const Register = () => {
    setNavigate(true);
  }
  
  if (navigate) {
    return <Navigate to='/signup' />
  }
  
 
  return (
    <div className='flex items-center justify-center h-screen'>
      
      <div>
        <div>
            <h1 className='text-5xl text-white'>Welcome to login</h1>
        </div>
        <div className='pt-4'>
            <h2 className='text-2xl text-white'>Don't have an account?</h2>
        </div>
        <div className='pt-5'>
            <button className='text-white border-2 border-white rounded-3xl w-[100px] h-12 hover:text-orange-500 hover:border-orange-500' onClick={Register}>Sign Up</button>
        </div>
        
        
        
      </div>
    </div>
  )
}
