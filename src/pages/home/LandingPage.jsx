import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Marquee from 'react-fast-marquee';

function LandingPage() {
  const text =
    'i’m working with react.js library and many related libraries with it and more...';
  const pvariant = {
    hidden: { opacity: 0 },
    vidsable: { opacity: 1, transition: { staggerChildren: 0.09, delay: 1 } },
  };

  const spanVariant = {
    hidden: { opacity: 0 },
    vidsable: { opacity: 1 },
  };
  return (
    <>
      <div className={` flex h-screen overflow-hidden`}>
        <div className=" container flex  items-center max-sm:px-8">
          <div className="  flex flex-col">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 10 }}
              className="px-[15rem]  text-3xl uppercase  leading-loose tracking-[.5rem] text-[#000000] max-sm:px-0 "
            >
              Said Magdy
            </motion.h1>
            <div className="w-[100vw] ">
              <Marquee>
                <motion.h2
                  initial={{
                    x: '15rem',
                    scale: 2,
                    opacity: 0.5,
                    padding: '15px',
                    zIndex: 1000,
                  }}
                  animate={{
                    opacity: [0.5, 0.1, 0.5],
                    scale: 2,
                  }}
                  transition={{
                    delay: 8,
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                  className=" text-6xl uppercase text-[#000000] max-sm:text-lg"
                >
                  frontend developer
                </motion.h2>
              </Marquee>
            </div>
            <div className="flex flex-col px-[15rem] max-sm:px-0">
              <motion.p
                variants={pvariant}
                initial="hidden"
                animate="vidsable"
                className={
                  'w-[60%] py-6 text-3xl max-sm:w-[70%] max-sm:text-xl'
                }
              >
                {text.split('').map((char, index) => (
                  <motion.span variants={spanVariant} key={index}>
                    {char}
                  </motion.span>
                ))}
              </motion.p>
              <Link
                to="/about"
                className="flex w-[18%] items-center rounded-br-[1rem] bg-[#000000] px-5 py-3 text-2xl text-[#dedede]  duration-300 hover:bg-[#171717] max-sm:w-[11.5rem]"
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
