import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Botton({ href, children, onClick }) {
  return (
    <motion.a
      whileInView={{ scale: [1.2, 1], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      onClick={onClick}
      className="flex cursor-pointer items-center rounded-br-[1rem] bg-[#000000] px-5 py-3 text-2xl text-[#dedede]  duration-300 hover:bg-[#171717] max-sm:text-lg"
    >
      {children}
      <span className="pl-3">
        <FaArrowRight />
      </span>
    </motion.a>
  );
}

export default Botton;
