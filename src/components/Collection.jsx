import React from 'react';

import { styles } from '../styles';
import { collections } from '../constants';

const CollectionCard = ({ index, title, creator, avatar, products }) => {
  return (
    <div className='lg:w-[330px] h-[525px] rounded-[20px] \' key={index}>
      <img src={products[0].img} alt='' className='w-[100%] h-[330px]' />
      <div className='grid grid-cols-3 gap-[15px] mt-[15px]'>
        {products
          .filter((product, index) => index < 2)
          .map((product, index) => {
            return (
              <>
                <img
                  src={product.img}
                  alt={product.title}
                  className='w-[100px] h-[100px] rounded-[20px]'
                />
              </>
            );
          })}
        <div className='relative  w-[100px] h-[100px] rounded-[20px] bg-secondary number text-center py-[32.5px] '>
          1025+
        </div>
      </div>

      <h5 className='text-white text-[22px] w-[100%] mt-[15px] font-semibold'>
        {title}
      </h5>
      <div className='flex gap-[12px] mt-[10px]'>
        <img src={avatar} alt={creator} className='w-[24px] h-[24px]' />
        <span>{creator}</span>
      </div>
    </div>
  );
};

const Collection = () => {
  return (
    <section className='relative w-full mx-auto py-[80px]'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto `}>
        <h1 className={`${styles.sectionHeadText}`}>Trending Collection</h1>
        <p className={`${styles.sectionSubText}`}>
          Checkout our weekly updated trending collection.
        </p>

        <div className='lg:grid lg:grid-cols-3 xs:block gap-[100px] mt-[60px]'>
          {collections.map((collection, index) => {
            return (
              <>
                <CollectionCard
                  key={collection.title}
                  index={index}
                  {...collection}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collection;
