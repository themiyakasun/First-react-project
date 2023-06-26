import React from 'react';

import { styles } from '../styles';
import { rocket } from '../assets';
import { image1 } from '../assets';

import { creators } from '../constants';
import { Link } from 'react-router-dom';

const CreatorCard = ({ index, name, img, volume }) => {
  return (
    <div
      className='lg:block lg:w-[240px] lg:h-[240px] flex gap-[20px] items-center w-full h-auto bg-tertiary rounded-[20px] p-[20px] mb-[30px] lg:mb-0 cursor-pointer'
      key={index}
    >
      <div className='flex  justify-center items-center'>
        <img
          src={img}
          alt={name}
          className='lg:w-[120px] lg:h-[120px] w-[60px] rounded-full'
        />
      </div>
      <div className='justify-start'>
        <div className='flex lg:justify-center items-center text-center '>
          <h5 className='text-white text-[22px] capitalize mt-[15px] font-semibold'>
            {name.split(' ')[0]}
          </h5>
        </div>
        <p className='flex justify-center text-[16px] font-semibold gap-[5px]'>
          <span className='text-[#858584]'>Top sales:</span>{' '}
          <span className='text-white numbers font-normal'> {volume} ETH</span>
        </p>
      </div>
    </div>
  );
};

const Creators = () => {
  return (
    <section className='relative w-full mx-auto py-[80px]'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto `}>
        <div className='lg:grid lg:grid-cols-2'>
          <div>
            <h1 className={`${styles.sectionHeadText}`}>Top creators</h1>
            <p className={`${styles.sectionSubText}`}>
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <Link to='/ranking'>
            <div className='sm:flex items-end justify-end xs:hidden'>
              <button className='flex w-[50%] h-[60px] px-[50px] border-2 border-[#A259FF] rounded-[20px] items-center justify-center gap-[12px] hover:bg-secondary'>
                <img src={rocket} alt='rocket-icon' />
                <span className='font-semibold'>View ranking</span>
              </button>
            </div>
          </Link>
        </div>

        <div className='lg:grid lg:grid-cols-4 sm:grid sm:grid-cols-2 xs:block gap-[30px] mt-[60px]'>
          {creators.slice(0, 16).map((creator, index) => {
            return (
              <>
                <CreatorCard key={creator.name} index={index} {...creator} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Creators;
