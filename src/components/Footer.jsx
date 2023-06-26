import React from 'react';

import { Link } from 'react-router-dom';
import { useState } from 'react';

import { styles } from '../styles';
import {
  logo,
  discord,
  youtube,
  twitter,
  instagram,
  envelope,
} from '../assets';
import { navLinks } from '../constants';

const Footer = () => {
  const [active, setActive] = useState('');
  return (
    <footer className='bg-tertiary py-[40px]'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto `}>
        <div className='lg:flex block justify-between border-b-2 border-[#858584]'>
          <div className='lg:mb-0 mb-[30px]'>
            <Link to='./' className='flex items-center gap-2'>
              <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
              <p className='text-white text-[22px] font-semibold cursor-pointer number'>
                NFT Marketplace
              </p>
            </Link>
            <p className='text-[16px] text-[#ccc] mt-[33px] w-[240px]'>
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className='text-[16px] text-[#ccc] mt-[20px]'>
              Join our community
            </p>
            <div className='flex gap-[10px] mt-[15px]'>
              <img src={discord} alt='' />
              <img src={youtube} alt='' />
              <img src={twitter} alt='' />
              <img src={instagram} alt='' />
            </div>
          </div>
          <div className='lg:mb-0 mb-[30px]'>
            <p className='text-white text-[22px] font-semibold number'>
              Explore
            </p>
            <ul className='list-none mt-[25px]'>
              {navLinks.map((link) => {
                return (
                  <>
                    <li
                      key={link.id}
                      className={`text-[16px] mb-[20px] ${
                        active === link.title ? 'text-secondary' : 'text-white'
                      } hover:text-secondary  cursor-pointer`}
                      onClick={() => setActive(link.id)}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <div className='pb-[10px]'>
            <p className='text-white text-[22px] font-semibold number'>
              Join our weekly digest
            </p>
            <p className='text-[16px] text-[#ccc] mt-[33px] w-[330px]'>
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <form action='' className='flex mt-[40px] h-[60px] self-stretch '>
              <input
                type='email'
                name=''
                id=''
                placeholder='Enter your email here'
                className='flex bg-white text-black  pl-[20px] border-0 outline-none rounded-l-[20px]'
              />
              <button className='flex bg-secondary px-[50px] items-center rounded-r-[20px]'>
                <img src={envelope} alt='' />
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p className='text-[16px] text-[#ccc] py-[20px]'>
          Ⓒ NFT Market. Use this template freely.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
