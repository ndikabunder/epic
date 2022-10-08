import React from 'react';
import Image from 'next/image';
import InfoPost from './InfoPost';

const Content = () => {
  return (
    <div className='px-1 md:flex md:justify-center md:items-center md:space-x-10 md:px-5'>
      <div className='w-full md:w-2/3 h-44 overflow-hidden rounded-lg mt-7 md:h-96'>
        <Image
          src='https://source.unsplash.com/500x500?tech'
          alt='Picture of the author'
          width='2000'
          height='2000'
        />
      </div>
      <div className='md:w-1/3'>
        <InfoPost
          className=''
          category='UI DESIGN'
          date='July 2, 2021'
          title='Understanding color theory: the color wheel and finding complementary colors'
          description='Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. '
          avatar='https://source.unsplash.com/500x500?avatar'
          name='Leslie Alexander'
          job='UI Designer'
        />
      </div>
    </div>
  );
};

export default Content;
