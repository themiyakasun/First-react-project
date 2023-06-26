import React from 'react';

import { styles } from '../styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { products, collections } from '../constants';

const ProductCard = ({ index, title, img, price, bid, author }) => {
  return (
    <>
      <div
        className='lg:w-[330px] h-auto rounded-[20px] bg-primary'
        key={index}
      >
        <img src={img} alt={title} className='w-[100%] h-[296px]' />
        <div className='px-[30px] py-[20px]'>
          <h5 className='text-white text-[22px] capitalize mt-[15px] font-semibold'>
            {title}
          </h5>
          <div className='flex gap-[10px]'>
            <img
              src={author.img}
              alt={author.name}
              className='w-[24px] h-[24px] rounded-full'
            />
            <p className='number font-normal'>{author.name}</p>
          </div>
          <div className='flex justify-between mt-[25px]'>
            <div className='flex flex-col'>
              <span className='text-[#858584] text-[12px] number'>Price</span>
              <span className='text-white text-[16px] number font-normal'>
                {price}ETH
              </span>
            </div>
            <div className='flex flex-col'>
              <span className='text-[#858584] text-[12px] number'>
                Highest bid
              </span>
              <span className='text-white text-[16px] number font-normal'>
                {bid}ETH
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function Marketplace() {
  return (
    <>
      <div className={`${styles.paddingX}relative  max-w-7xl mx-auto`}>
        <div className='py-[180px]'>
          <h1 className='text-[51px] text-white font-semibold'>
            Browse Marketplace
          </h1>
          <p className='text-white text-[22px]'>
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>

          <form action='' className='h-[60px] w-full mt-[30px] mb-[60px]'>
            <div className='relative'>
              <AiOutlineSearch className='absolute right-[20px] top-[20px] w-[24px] h-[24px]' />
              <input
                type='search'
                name=''
                id=''
                className='w-full h-full border-none outline-none rounded-[20px] p-[20px]'
                placeholder='Search your favourite NFTs'
              />
            </div>
          </form>
        </div>
      </div>
      <div className=' w-full border-t-2 border-[#858584]'>
        <div className={`${styles.paddingX}relative  max-w-7xl mx-auto`}>
          <div className='flex items-start justify-between'>
            <button className='bg-transparent  w-full h-[60px] text-[#858584] focus:text-white focus:border-b-2 focus:border-[#858584]'>
              <div>
                NFTs{' '}
                <span className='bg-[#858584] rounded-full text-white number py-[5px] px-[10px]'>
                  {products.length}
                </span>
              </div>
            </button>
            <button className='bg-transparent  w-full h-[60px] text-[#858584] focus:text-white focus:border-b-2 focus:border-[#858584]'>
              <div>
                Collections{' '}
                <span className='bg-[#858584] rounded-full text-white number py-[5px] px-[10px]'>
                  {collections.length}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className=' bg-tertiary pt-[60px] pb-[80px] border-b-2 border-primary'>
        <div className={`${styles.paddingX}relative  max-w-7xl mx-auto`}>
          <div className='sm:grid lg:grid-cols-3 sm:grid-cols-2 block gap-[100px] mt-[60px]'>
            {products.map((product, index) => {
              return (
                <>
                  <ProductCard key={product.title} index={index} {...product} />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Marketplace;
