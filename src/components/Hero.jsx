import React from 'react';

import { styles } from '../styles';
import { hero, avatar, rocket } from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative w-full mx-auto lg:h-screen h-[130vh]'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[180px] max-w-7xl mx-auto lg:flex sm:flex gap-[30px] justify-between xs:block`}
      >
        <div className='xs:w-[100%] lg:w-[510px]  my-auto'>
          <h1 className={styles.heroHeadText}>
            Discover digital art & Collect NFTs
          </h1>
          <p className={styles.heroSubText}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Link to='/signup'>
            <div className='rounded-[20px] bg-secondary lg:px-[50px] xs:px-[145px] py-[20px] lg:w-[224px] h-[60px] flex items-center gap-[10px] mb-[30px] cursor-pointer'>
              <img src={rocket} alt='rocket' />
              Get started
            </div>
          </Link>

          <div className='flex gap-[30px] justify-between'>
            <div>
              <h4 className='text-[28px] font-bold number'>240k+</h4>
              <p className='text-[24px] font-normal'>Total Sale</p>
            </div>
            <div>
              <h4 className='text-[28px] font-bold number'>100k+</h4>
              <p className='text-[24px] font-normal'>Auctions</p>
            </div>
            <div>
              <h4 className='text-[28px] font-bold number'>240k+</h4>
              <p className='text-[24px] font-normal'>Artists</p>
            </div>
          </div>
        </div>
        <div className='lg:w-[510px]  h-[510px] sm:w-[510px] rounded-[20px] bg-tertiary'>
          <img src={hero} alt='hero' className='h-[401px]' />
          <div className=' p-[22px] w-[100%]'>
            <h5 className='text-white text-[22px] font-semibold mb-[10px]'>
              Space Walking
            </h5>
            <p className='flex gap-[12px]'>
              <img
                src={avatar}
                alt='avatar'
                className='rounded-full w-[24px] h-[24px]'
              />
              <span className='text-white text-[16px] font-normal'>
                Animakid
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
