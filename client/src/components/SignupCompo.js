import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Userimage from '../images/userimage.png'

export default function SignupCompo() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone_number: '',
    password: '',
    confirmPassword: '',
    gender: '',
    dob: '',
    image: Userimage
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      const file = files[0];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        // Set the base64 image string to state
        setData((prevData) => ({
          ...prevData,
          image: reader.result // Setting base64 encoded image
        }));
      };
    } else {
      setData({ ...data, [name]: value });
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    let formErrors = {};

    if (!data.fname.trim()) formErrors.fname = 'First name is required';
    if (!data.lname.trim()) formErrors.lname = 'Last name is required';
    if (!data.email.trim()) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(data.email)) formErrors.email = 'Email is invalid';
    if (!data.phone_number.trim()) formErrors.phone_number = 'Phone number is required';
    if (!data.password) formErrors.password = 'Password is required';
    else if (data.password.length < 6) formErrors.password = 'Password must be at least 6 characters';
    if (data.password !== data.confirmPassword) formErrors.confirmPassword = 'Passwords do not match';
    if (!data.gender) formErrors.gender = 'Gender is required';
    if (!data.dob) formErrors.dob = 'Date of birth is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const register = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const { confirmPassword, ...dataToSend } = data;
        const response = await axios.post('/user/createuser', dataToSend);
        if (response.data.error) {
          toast.error(response.data.error);
        } else {
          setData({
            fname: '',
            lname: '',
            email: '',
            phone_number: '',
            password: '',
            confirmPassword: '',
            gender: '',
            dob: '',
            image: Userimage
          });
          toast.success('Registration successful!');
        }
      } catch (error) {
        console.error('Error registering user:', error);
        toast.error('An error occurred during registration');
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-[#19191A]'>
      <div className='w-full max-w-lg p-8 space-y-6 rounded-lg shadow-lg bg-[#f1f1f1] bg-opacity-10'>
        <h2 className='text-3xl font-bold text-center text-[#f1f1f1]'>Create an Account</h2>
        <form className='space-y-4' onSubmit={register}>
          <div className='flex space-x-4'>
            <div className='w-1/2'>
              <label className='block text-sm font-medium text-[#f1f1f1] text-left' htmlFor='firstName'>
                First Name
              </label>
              <input
                id='firstName'
                type='text'
                className='w-full p-3 mt-1 text-[#19191A] bg-[#f1f1f1] border border-[#f1f1f1] rounded-lg focus:ring-2 focus:ring-[#f1f1f1] focus:border-transparent'
                placeholder='First Name'
                name='fname'
                value={data.fname}
                onChange={handleChange}
              />
              {errors.fname && <p className='mt-1 text-xs text-red-500'>{errors.fname}</p>}
            </div>

            <div className='w-1/2'>
              <label className='block text-sm font-medium text-[#f1f1f1] text-left' htmlFor='lastName'>
                Last Name
              </label>
              <input
                id='lastName'
                type='text'
                className='w-full p-3 mt-1 text-[#19191A] bg-[#f1f1f1] border border-[#f1f1f1] rounded-lg focus:ring-2 focus:ring-[#f1f1f1] focus:border-transparent'
                placeholder='Last Name'
                name='lname'
                value={data.lname}
                onChange={handleChange}
              />
              {errors.lname && <p className='mt-1 text-xs text-red-500'>{errors.lname}</p>}
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-[#f1f1f1] text-left' htmlFor='phoneNumber'>
              Phone Number
            </label>
            <input
              id='phoneNumber'
              type='tel'
              className='w-full p-3 mt-1 text-[#19191A] bg-[#f1f1f1] border border-[#f1f1f1] rounded-lg focus:ring-2 focus:ring-[#f1f1f1] focus:border-transparent'
              placeholder='Phone Number'
              name='phone_number'
              value={data.phone_number}
              onChange={handleChange}
            />
            {errors.phone_number && <p className='mt-1 text-xs text-red-500'>{errors.phone_number}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium text-[#f1f1f1] text-left' htmlFor='email'>
              Email
            </label>
            <input
              id='email'
              type='email'
              className='w-full p-3 mt-1 text-[#19191A] bg-[#f1f1f1] border border-[#f1f1f1] rounded-lg focus:ring-2 focus:ring-[#f1f1f1] focus:border-transparent'
              placeholder='Email'
              name='email'
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && <p className='mt-1 text-xs text-red-500'>{errors.email}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium text-[#f1f1f1] text-left' htmlFor='password'>
              Password
            </label>
            <input
              id='password'
              type='password'
              className='w-full p-3 mt-1 text-[#19191A] bg-[#f1f1f1] border border-[#f1f1f1] rounded-lg focus:ring-2 focus:ring-[#f1f1f1] focus:border-transparent'
              placeholder='Password'
              name='password'
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && <p className='mt-1 text-xs text-red-500'>{errors.password}</p>}
          </div>

          <div>
            <label className='block text-sm font-medium text-[#f1f1f1] text-left' htmlFor='confirmPassword'>
              Confirm Password
            </label>
            <input
              id='confirmPassword'
              type='password'
              className='w-full p-3 mt-1 text-[#19191A] bg-[#f1f1f1] border border-[#f1f1f1] rounded-lg focus:ring-2 focus:ring-[#f1f1f1] focus:border-transparent'
              placeholder='Confirm Password'
              name='confirmPassword'
              value={data.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className='mt-1 text-xs text-red-500'>{errors.confirmPassword}</p>}
          </div>

          <div className='flex space-x-4'>
            <div className='w-1/2'>
              <label className='block text-sm font-medium text-[#f1f1f1] text-left' htmlFor='date'>
                Date Of Birth
              </label>
              <input
                id='date'
                type='date'
                className='w-full p-3 mt-1 text-[#19191A] bg-[#f1f1f1] border border-[#f1f1f1] rounded-lg focus:ring-2 focus:ring-[#f1f1f1] focus:border-transparent'
                name='dob'
                value={data.dob}
                onChange={handleChange}
              />
              {errors.dob && <p className='mt-1 text-xs text-red-500'>{errors.dob}</p>}
            </div>

            <div className='w-1/2'> 
              <label className='block text-sm font-medium text-[#f1f1f1] text-left' htmlFor='gender'>
                Gender
              </label>
              <select
                name='gender'
                value={data.gender}
                onChange={handleChange}
                id='gender'
                className='w-full p-3 mt-1 text-[#19191A] bg-[#f1f1f1] border border-[#f1f1f1] rounded-lg focus:ring-2 focus:ring-[#f1f1f1] focus:border-transparent'
              >
                <option value='' disabled>Select Gender</option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
              </select>
              {errors.gender && <p className='mt-1 text-xs text-red-500'>{errors.gender}</p>}
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='w-full py-3 mt-4 text-lg font-semibold text-[#f1f1f1] transition duration-300 ease-in-out rounded-lg shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#f1f1f1] focus:ring-offset-2 border-2 border-[#f1f1f1] hover:border-orange-600 hover:text-orange-600'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}