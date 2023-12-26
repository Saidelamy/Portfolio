import { motion } from 'framer-motion';
import List from './List';
import Social from './../../ui/Social';

function NavList() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 flex h-screen w-[450px] items-center justify-center bg-[#090909] bg-opacity-[.99] text-3xl leading-relaxed hover:duration-500 max-sm:left-0 max-sm:right-0 max-sm:top-0 max-sm:w-full max-sm:bg-opacity-90 md:left-[7rem]">
        <ul className="flex flex-col items-center ">{<List />}</ul>
        <div className="hidden max-sm:absolute max-sm:bottom-0 max-sm:left-12 max-sm:block">
          <Social />
        </div>
      </div>
    </motion.div>
  );
}

export default NavList;
