import React from 'react';

import { styles } from '../styles';

import { categories } from '../constants';

const CategoryCard = ({ title, img, icon }) => {
  return (
    <div className='lg:w-[240px] lg:h-[300px] w-[160px] bg-tertiary rounded-[20px] cursor-pointer relative'>
      <img src={img} alt={title} className='h-[240px] w-[100%] blur-[2px]' />
      <img
        src={icon}
        alt='icon'
        className='w-[100px] h-[100px] absolute top-[70px] left-[70px]'
      />
      <div className='px-[30px] py-[20px]'>
        <h5 className='text-white text-[22px] capitalize font-semibold'>
          {title}
        </h5>
      </div>
    </div>
  );
};
const Categories = () => {
  return (
    <section className='relative w-full mx-auto py-[80px]'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto `}>
        <h1 className={`${styles.sectionHeadText}`}>Browse categories</h1>
        <div className='grid lg:grid-cols-4 sm:grid-cols-4 xs:grid-cols-2 gap-[30px] mt-[60px]'>
          {categories.map((category, index) => {
            return (
              <>
                <CategoryCard
                  key={category.title}
                  index={index}
                  {...category}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
