import React from 'react';

const Background = ({ children }) => {
  return <body className='bg-white dark:bg-transparent'>{children}</body>;
};

export default Background;
