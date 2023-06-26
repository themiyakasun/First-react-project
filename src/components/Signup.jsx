import React from 'react';

import { imagePlaceholder2 } from '../assets';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

function Signup() {
  return (
    <>
      <div className='sm:flex items-center self-stretch gap-[60px] block'>
        <img src={imagePlaceholder2} alt='' />
        <div className='sm:text-left text-center'>
          <h1 className='text-[51px] text-white font-semibold'>
            Create Account
          </h1>
          <p className='text-[22px] w-[460px] '>
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
          <form action='' className=' w-[330px] sm:mx-0 mx-12'>
            <div className='relative flex items-center gap-[12px] mt-[40px]'>
              <AiOutlineUser className='absolute text-[#BDBDBD] left-3' />
              <input
                type='text'
                placeholder='Username'
                className='py-[16px] pl-[40px] pr-[20px] rounded-[20px] bg-white text-primary h-[46px] w-full'
              />
            </div>
            <div className='relative flex items-center gap-[12px] mt-[15px]'>
              <AiOutlineMail className='absolute text-[#BDBDBD] left-3' />
              <input
                type='email'
                placeholder='Email Address'
                className='py-[16px] pl-[40px] pr-[20px] rounded-[20px] bg-white text-primary h-[46px] w-full'
              />
            </div>
            <div className='relative flex items-center gap-[12px] mt-[15px]'>
              <AiOutlineLock className='absolute text-[#BDBDBD] left-3' />
              <input
                type='password'
                placeholder='Password'
                className='py-[16px] pl-[40px] pr-[20px] rounded-[20px] bg-white text-primary h-[46px] w-full'
              />
            </div>
            <div className='relative flex items-center gap-[12px] mt-[15px]'>
              <AiOutlineLock className='absolute text-[#BDBDBD] left-3' />
              <input
                type='password'
                placeholder='Confirm Password'
                className='py-[16px] pl-[40px] pr-[20px] rounded-[20px] bg-white text-primary h-[46px] w-full'
              />
            </div>
            <button className='bg-secondary text-white w-full h-[46px] text-center rounded-[20px] px-[20px] mt-[30px]'>
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
