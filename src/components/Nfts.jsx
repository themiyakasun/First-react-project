import React from 'react';

import { styles } from '../styles';
import { rocket } from '../assets';
import { products } from '../constants';

const ProductCard = ({ index, title, img, price, bid, author }) => {
  return (
    <div className='lg:w-[330px] h-auto rounded-[20px] bg-tertiary' key={index}>
      <img src={img} alt={title} className='w-[100%] h-[296px]' />
      <div className='px-[30px] py-[20px]'>
        <h5 className='text-white text-[22px] capitalize mt-[15px] font-semibold'>
          {title}
        </h5>
        <div className='flex gap-[10px]'>
          <img
            src={author.img}
            alt=''
            className='w-[24px] h-[24px] rounded-full'
          />
          <p className='number font-normal'>{author.name}</p>
        </div>
        <div className='flex justify-between mt-[25px]'>
          <div className='flex flex-col'>
            <span className='text-[#858584] text-[12px] number'>Price</span>
            <span className='text-white text-[16px] number font-normal'>
              {price} ETH
            </span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[#858584] text-[12px] number'>
              Highest bid
            </span>
            <span className='text-white text-[16px] number font-normal'>
              {bid} ETH
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Nfts = () => {
  return (
    <section className='relative w-full mx-auto py-[80px]'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto `}>
        <div className='lg:grid lg:grid-cols-2'>
          <div>
            <h1 className={`${styles.sectionHeadText}`}>Discover More NFTs</h1>
            <p className={`${styles.sectionSubText}`}>
              Explore new trending NFTs
            </p>
          </div>
          <div className='lg:flex items-end justify-end hidden '>
            <button className='flex h-[60px] px-[50px] border-2 border-[#A259FF] rounded-[20px] items-center justify-center gap-[12px] hover:bg-secondary'>
              <img src={rocket} alt='rocket-icon' />
              <span className='font-semibold'>View all</span>
            </button>
          </div>
        </div>
        <div className='sm:grid lg:grid-cols-3 sm:grid-cols-2 block gap-[100px] mt-[60px]'>
          {products.slice(0, 3).map((product, index) => {
            return (
              <>
                <ProductCard key={product.title} index={index} {...product} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Nfts;
