import React from 'react';

import { styles } from '../styles';
import { envelope, inboxPhoto } from '../assets';

const Inbox = () => {
  return (
    <section className='relative w-full mx-auto py-[80px]'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto `}>
        <div className='bg-tertiary rounded-[20px] p-[60px]'>
          <div className='sm:flex xs:block gap-[80px]'>
            <img src={inboxPhoto} alt='' />
            <div>
              <h2 className='text-[38px] font-semibold capitalize w-[425px]'>
                Join our weekly digest
              </h2>
              <p className='text-[22px]'>
                Get exclusive promotions & updates straight to your inbox.
              </p>
              <form action='' className='lg:flex block mt-[40px] '>
                <input
                  type='email'
                  name=''
                  id=''
                  placeholder='Enter your email here'
                  className='flex bg-white text-black lg:w-[425px] w-auto pl-[20px] border-0 outline-none rounded-l-[20px] lg:h-[60px] h-[45px]'
                />
                <button className='flex bg-secondary px-[50px] items-center rounded-r-[20px] lg:h-[60px] h-[45px] lg:mt-0 mt-[20px]'>
                  <img src={envelope} alt='' />
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inbox;
