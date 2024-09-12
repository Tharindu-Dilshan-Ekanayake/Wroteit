import React from 'react';
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

export default function UserNav() {
  return (
    <div className='absolute flex justify-center transform -translate-x-1/2 bottom-8 left-1/2'>
      <div className='flex justify-center border-2 rounded-full w-[600px] h-[70px] bg-opacity-10 bg-gradient-to-r from-[#19191ab6] to-[#27272ab2] text-white items-center shadow-2xl backdrop-blur-md'>
        <div className='flex justify-between w-screen'>
          <div className='pl-12'>
            <GoHomeFill size={24} />
          </div>
          <div>
            <FaUser size={24} />
          </div>
          <div>
            <IoNotifications size={24} />
          </div>
          <div>
            <FaPen size={24} />
          </div>
          <div className='pr-12'>
            <IoSettings size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
