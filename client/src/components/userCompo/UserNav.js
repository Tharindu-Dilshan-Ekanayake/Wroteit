import React from 'react';
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

export default function UserNav() {
  return (
    <div className='absolute flex justify-center transform -translate-x-1/2 bottom-8 left-1/2'>
      <div className='flex justify-center border-2 rounded-full w-[500px] h-[70px] bg-opacity-10 bg-gradient-to-b from-[#19191a] to-[#39393af6] text-white items-center shadow-2xl backdrop-blur-md'>
        <div className='flex justify-between w-screen'>
          <div className='pl-12'>
            <GoHomeFill size={30} className='hover:text-orange-400 ' />
          </div>
          <div>
            <FaUser size={30} />
          </div>
          <div>
            <IoNotifications size={30} />
          </div>
          <div>
            <FaPen size={30} />
          </div>
          <div className='pr-12'>
            <IoSettings size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
