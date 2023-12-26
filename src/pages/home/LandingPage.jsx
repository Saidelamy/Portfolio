import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

function LandingPage() {
  const text =
    'i’m working with react.js library and many related libraries with it and more...';
  const pvariant = {
    hidden: { opacity: 0 },
    vidsable: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const spanVariant = {
    hidden: { opacity: 0 },
    vidsable: { opacity: 1 },
  };
  return (
    <>
      <div className={`flex h-screen items-center justify-center`}>
        <div className="container flex items-center px-[15rem] max-sm:px-8">
          <div className="flex flex-col">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 10 }}
              className="text-3xl uppercase leading-loose tracking-[.5rem] text-[#000000] "
            >
              Said Magdy
            </motion.h1>
            <motion.h2
              initial={{ x: [100, 0, 100] }}
              animate={{
                opacity: [1, 0.1, 1],
                x: [0, 100, 0],
              }}
              transition={{
                delay: 8,
                duration: 5,
                type: 'spring',
                stiffness: 120,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="text-6xl uppercase text-[#000000] max-sm:text-3xl"
            >
              frontend developer
            </motion.h2>
            <div className="flex flex-col">
              <motion.p
                variants={pvariant}
                initial="hidden"
                animate="vidsable"
                className={'w-[68%] py-6 text-3xl max-sm:w-full max-sm:text-xl'}
              >
                {text.split('').map((char, index) => (
                  <motion.span variants={spanVariant} key={index}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
              <Link
                to="/about"
                className="flex w-[25%] items-center rounded-br-[1rem] bg-[#000000] px-5 py-3 text-2xl text-[#dedede]  duration-300 hover:bg-[#171717] max-sm:w-[11.1rem]"
              >
                About me
                <span className="pl-3">
                  <FaArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
