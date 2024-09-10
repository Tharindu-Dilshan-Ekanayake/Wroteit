import React from 'react'
import LOGO from '../images/LOGO.png'

export default function CurrentUser() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div>
        <div>
          <div className='absolute top-0 right-5 '>
            <img src={LOGO} alt='Logo' className='w-[150px]' />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
