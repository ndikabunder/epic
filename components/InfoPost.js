import React from 'react';
import Image from 'next/image';

const InfoPost = ({
  category,
  date,
  title,
  description,
  avatar,
  name,
  job,
}) => {
  return (
    <>
      <h3 className='text-white text-sm text-white/60 mt-5'>
        {category} - {date}
      </h3>
      <h2 className='text-white mt-3 text-2xl'>{title}</h2>
      <p className='text-white text-white/60 mt-3'>{description}</p>
      <div className='flex  mt-5'>
        <div className='h-12 w-12 mr-4 rounded-full overflow-hidden'>
          <Image
            src={avatar}
            alt='Picture of the author'
            width='500'
            height='500'
          />
        </div>
        <div className='text-white'>
          <h3>{name}</h3>
          <h4 className='text-white/60'>{job}</h4>
        </div>
      </div>
    </>
  );
};

export default InfoPost;
