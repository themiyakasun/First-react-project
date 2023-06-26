import React from 'react';

import { styles } from '../styles';
import { creators } from '../constants';

const CreatorCard = ({ index, name, img, change, sales, volume }) => {
  return (
    <>
      <div
        className='flex justify-between items-center bg-tertiary rounded-[20px] px-[20px] py-[12px] text-white text-[16px] mb-[20px]'
        key={index}
      >
        <div className='flex gap-[20px] w-[480px] items-center'>
          <span className='w-[30px] bg-primary rounded-full flex items-center justify-center text-[#858584]'>
            {index + 1}
          </span>
          <img
            src={img}
            alt={name}
            className='lg:w-[60px] lg:h-[60px] w-[24px] h-[24px]'
          />
          <p className='sm:text-[22px] xs:text-[16px]'>{name}</p>
        </div>
        <div className='sm:block xs:hidden w-[160px] text-[#00AC4F]'>
          {change}
        </div>
        <div className='lg:block xs:hidden w-[160px]'>{sales}</div>
        <div className='w-[160px]'>{volume} ETH</div>
      </div>
    </>
  );
};

function Ranking() {
  return (
    <>
      <div className={`${styles.paddingX}relative  max-w-7xl mx-auto`}>
        <div className='py-[180px]'>
          <h1 className='text-[51px] text-white font-semibold'>Top Creators</h1>
          <p className='text-white text-[22px]'>
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>
        <div className='flex items-start justify-between w-full '>
          <button className='bg-transparent  w-full h-[60px] text-[#858584] focus:text-white focus:border-b-2 focus:border-[#858584]'>
            Today
          </button>
          <button className='bg-transparent  w-full h-[60px] text-[#858584] focus:text-white focus:border-b-2 focus:border-[#858584]'>
            This Week
          </button>
          <button className='bg-transparent  w-full h-[60px] text-[#858584] focus:text-white focus:border-b-2 focus:border-[#858584]'>
            This Month
          </button>
          <button className='bg-transparent  w-full h-[60px] text-[#858584] focus:text-white focus:border-b-2 focus:border-[#858584]'>
            All Time
          </button>
        </div>

        <div className='flex justify-between border-2 border-tertiary rounded-[20px] px-[20px] py-[12px] text-[#858584] text-[16px] mt-[40px] mb-[20px]'>
          <div className='flex gap-[20px] w-[480px]'>
            <span className='w-[30px]'>#</span>
            <span>Artist</span>
          </div>
          <div className='sm:block xs:hidden lgw-[160px]'>Change</div>
          <div className='lg:block xs:hidden w-[160px] '>NFTs Sold</div>
          <div className='w-[160px]'>Volume</div>
        </div>

        {creators.map((creator, index) => {
          return (
            <>
              <CreatorCard key={creator.name} index={index} {...creator} />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Ranking;
