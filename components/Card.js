import React, { useState } from 'react';
import Image from 'next/image';
import InfoPost from './InfoPost';

const Card = () => {
  const [post, setPost] = useState([
    {
      id: '1',
      category: 'INTERNET',
      date: 'June 28, 2021',
      title: 'How to design a product that can grow itself 10x in year',
      description:
        'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      avatar: 'https://source.unsplash.com/500x500?avatar',
      name: 'Jenny Wilson',
      job: 'Product Designer',
    },
    {
      id: '2',
      category: '9 TO 5',
      date: 'June 22, 2021',
      title: 'The More Important the Work, the More Important the Rest',
      description:
        'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      avatar: 'https://source.unsplash.com/500x500?avatar',
      name: 'Esther Howard',
      job: 'Entrepreneur',
    },
    {
      id: '3',
      category: 'INSPIRATIONS',
      date: 'June 18, 2021',
      title: 'Email Love - Email Inspiration, Templates and Discovery',
      description:
        'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      avatar: 'https://source.unsplash.com/500x500?avatar',
      name: 'Robert Fox',
      job: 'Front-end Engineer',
    },
    {
      id: '4',
      category: '9 TO 5',
      date: 'June 22, 2021',
      title: 'The More Important the Work, the More Important the Rest',
      description:
        'Suitable Quality is determined by product users, clients or customers, not by society in general. For example, a low priced product may be viewed as having high.',
      avatar: 'https://source.unsplash.com/500x500?avatar',
      name: 'Esther Howard',
      job: 'Entrepreneur',
    },
    {
      id: '5',
      category: 'INSPIRATIONS',
      date: 'June 18, 2021',
      title: 'Email Love - Email Inspiration, Templates and Discovery',
      description:
        'Consider that for a moment: everything we see around us is assumed to have had a cause and is contingent upon something else.',
      avatar: 'https://source.unsplash.com/500x500?avatar',
      name: 'Robert Fox',
      job: 'Front-end Engineer',
    },
    {
      id: '6',
      category: 'INTERNET',
      date: 'June 28, 2021',
      title: 'How to design a product that can grow itself 10x in year',
      description:
        'Auctor Porta. Augue vitae diam mauris faucibus blandit elit per, feugiat leo dui orci. Etiam vestibulum. Nostra netus per conubia dolor.',
      avatar: 'https://source.unsplash.com/500x500?avatar',
      name: 'Jenny Wilson',
      job: 'Product Designer',
    },
  ]);

  return (
    <div className='flex flex-wrap space-y-10 md:space-y-0'>
      {post.map((item) => (
        <div className=' md:w-1/3 md:px-5' key={item.id}>
          <div className='w-full  h-44 overflow-hidden rounded-lg mt-7 '>
            <Image
              src='https://source.unsplash.com/500x500?tech'
              alt='Picture of the author'
              width='500'
              height='500'
            />
          </div>
          <InfoPost
            category={item.category}
            date={item.date}
            title={item.title}
            description={item.description}
            avatar={item.avatar}
            name={item.name}
            job={item.job}
          />
        </div>
      ))}
    </div>
  );
};

export default Card;
