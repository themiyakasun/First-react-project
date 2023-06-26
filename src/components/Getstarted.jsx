import React from 'react';

import { styles } from '../styles';
import { icon, icon2, icon3 } from '../assets';

const Getstarted = () => {
  return (
    <section className='relative w-full mx-auto py-[80px]'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto `}>
        <h1 className={`${styles.sectionHeadText}`}>How it works</h1>
        <p className={`${styles.sectionSubText}`}>
          Find out how to get started
        </p>

        <div className='sm:grid sm:grid-cols-3 block gap-[100px] mt-[60px]'>
          <div className='lg:w-[330px] sm:block xs:flex h-auto rounded-[20px] p-[30px] gap-[20px] sm:mb-0 xs:mb-[30px] bg-tertiary'>
            <img
              src={icon}
              alt=''
              className='sm:w-[250px] sm:h-[250px] w-[100px] h-[100px]'
            />
            <div>
              <h3 className='text-[22px] font-semibold sm:text-center mb-[30px]'>
                Setup Your wallet
              </h3>
              <p className='text-[16px] sm:text-center'>
                Set up your wallet of choice. Connect it to the Animarket by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
          <div className='lg:w-[330px] sm:block xs:flex h-auto rounded-[20px] p-[30px] gap-[20px] sm:mb-0 xs:mb-[30px] bg-tertiary'>
            <img
              src={icon2}
              alt=''
              className='sm:w-[250px] sm:h-[250px] w-[100px] h-[100px]'
            />
            <div>
              <h3 className='text-[22px] font-semibold  sm:text-center mb-[30px]'>
                Create Collection
              </h3>
              <p className='text-[16px] sm:text-center'>
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </p>
            </div>
          </div>
          <div className='lg:w-[330px] sm:block xs:flex h-auto rounded-[20px] p-[30px] gap-[20px] sm:mb-0 xs:mb-[30px]] bg-tertiary'>
            <img
              src={icon3}
              alt=''
              className='sm:w-[250px] sm:h-[250px] w-[100px] h-[100px]'
            />
            <div>
              <h3 className='text-[22px] font-semibold  sm:text-center mb-[30px]]'>
                Start Earning
              </h3>
              <p className='text-[16px] sm:text-center'>
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
