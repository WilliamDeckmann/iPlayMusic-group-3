import TopNav from '../components/TopNav';
import BottomNav from '../components/BottomNav';
import HeadingGiant from '../subComponents/HeadingGiant';
import CategoryCard from '../subComponents/CategoryCard';
import { motion } from 'framer-motion';
import { IoEllipsisHorizontal } from 'react-icons/io5';

const Categories = () => {
  return (
    <div className='h-[100%] w-full dark:bg-BleachedCedar bg-white overflow-hidden'>
      <div className='ml-[8%]'>
        <HeadingGiant text='Categories' />
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='ml-[-4%] mt-[10%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard background='#EE0979' color='white' text='Alternative' />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='ml-[-4%] mt-[7%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard background='#E54028' color='white' text='Blues' />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className='ml-[-4%] mt-[7%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard background='#F18D05' color='white' text='Classical' />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className='ml-[-4%] mt-[7%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard background='#F2BC06' color='white' text='Country' />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
          className='ml-[-4%] mt-[7%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard background='#5EB11C' color='white' text='Dance' />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className='ml-[-4%] mt-[7%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard background='#3A7634' color='white' text='Electronic' />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          className='ml-[-4%] mt-[7%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard
            background='#0ABEBE'
            color='white'
            text='Fitness & Workout'
          />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
          className='ml-[-4%] mt-[7%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard background='#00A1CB' color='white' text='Hip-hop/Rap' />
        </motion.div>
        <motion.div
          animate={{ opacity: 1 }}
          transition={{ duration: 4.5 }}
          className='ml-[-4%] mt-[7%] opacity-0 font-semiBold text-start'
        >
          <CategoryCard background='#115793' color='white' text='Industrial' />
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
