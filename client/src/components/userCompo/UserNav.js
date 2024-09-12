import React, { useEffect, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { IoNotifications } from "react-icons/io5";
import { FaPen } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';


export default function UserNav() {
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/userhome':
        setActiveItem(1);
        break;
      case '/profile':
        setActiveItem(2);
        break;
      case '/notifications':
        setActiveItem(3);
        break;
      case '/createblog':
        setActiveItem(4);
        break;
      case '/settings':
        setActiveItem(5);
        break;
      default:
        setActiveItem(null);
    }
  }, [location.pathname]);

  const getItemClass = (itemNumber) => {
    let classes = 'transition-colors duration-200 ';
    if (activeItem === itemNumber) {
      classes += 'text-orange-500 ';
    } else {
      classes += 'text-white opacity-40 hover:text-white hover:opacity-100 ';
    }
    return classes;
  };

  return (
    <div className='absolute flex justify-center transform -translate-x-1/2 bottom-8 left-1/2'>
      <div className='flex justify-center border-2 rounded-[50px] w-[400px] h-[70px] bg-opacity-10 bg-gradient-to-b from-[#19191a] to-[#39393af6] text-white items-center shadow-2xl backdrop-blur-md'>
        <div className='flex justify-between w-screen'>
          <div className='pl-12'>
            <Link to='/userhome'>
              <GoHomeFill size={30} className={getItemClass(1)} />
            </Link>
          </div>
          <div>
            <Link to='/profile'>
              <FaUser size={30} className={getItemClass(2)} />
            </Link>
          </div>
          <div>
            <Link to='/notifications'>
              <IoNotifications size={30} className={getItemClass(3)} />
            </Link>
          </div>
          <div>
            <Link to='/createblog'>
              <FaPen size={30} className={getItemClass(4)} />
            </Link>
          </div>
          <div className='pr-12'>
            <Link to='/settings'>
              <IoSettings size={30} className={getItemClass(5)} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}