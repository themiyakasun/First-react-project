import React from 'react';

import { highlight } from '../assets';
import { products } from '../constants';
import { styles } from '../styles';
import { eye } from '../assets';

const Highlights = () => {
  return (
    <section className='relative h-screen mx-auto bg-gradient-to-t from-secondary/100 from-40% to-transparent'>
      <img src={highlight} alt='' className='w-full mix-blend-overlay h-full' />
      <div className={`${styles.paddingX} max-w-7xl mx-auto `}>
        <div className='lg:flex justify-between items-end absolute bottom-[60px] lg:gap-[30px] block'>
          <div className='lg:w-[755px]'>
            <div className='px-[20px] py-[10px] rounded-[20px] bg-tertiary w-[150px]'>
              <div className='flex gap-[10px] '>
                <img
                  src={products[0].author.img}
                  alt=''
                  className='w-[24px] h-[24px] rounded-full'
                />
                <p className='text-white text-[16px]'>
                  {products[0].author.name}
                </p>
              </div>
            </div>
            <h1 className='text-white lg:text-[51px] text-[38px] font-semibold my-[30px]'>
              {products[0].title}
            </h1>
            <button className='flex items-center bg-white px-[50px] py-[22px] text-black font-semibold rounded-[20px] gap-[12px]'>
              <img src={eye} alt='' /> See NFT
            </button>
          </div>
          <div className=' bg-tertiary/50 rounded-[20px] p-[30px] lg:h-[160px] h-auto w-auto backdrop-blur-sm'>
            <p className='text-white text-[12px] number font-normal mb-[10px]'>
              Auction ends in:
            </p>
            <div className='flex gap-[10px]'>
              <div className='flex flex-col'>
                <h2 className='text-[38px] font-bold number'>59 : </h2>
                <p className='text-[12px] number'>Hours</p>
              </div>
              <div className='flex flex-col'>
                <h2 className='text-[38px] font-bold number'> 59 :</h2>
                <p className='text-[12px] number'>Minutes</p>
              </div>
              <div className='flex flex-col'>
                <h2 className='text-[38px] font-bold number'> 59</h2>
                <p className='text-[12px] number'>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
