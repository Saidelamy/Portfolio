import { Link } from 'react-router-dom';
import { GoPaperAirplane } from 'react-icons/go';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoJavascript } from 'react-icons/io5';
import {
  FaHtml5,
  FaSquareGit,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
} from 'react-icons/fa6';
import {
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiStyledcomponents,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import Paragraph from './../ui/Paragraph';
import { Helmet } from 'react-helmet';
//
import said from '../../image/said.png';
function About() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Said Magdy | About</title>
      </Helmet>
      <motion.section
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: [0.5, 1] }}
        transition={{ duration: 1 }}
        exit={{ y: '-100vh', opacity: 0 }}
        className=" "
      >
        <div className="">
          <motion.div
            initial={{ x: '-55%' }}
            animate={{
              x: '50%',
            }}
            transition={{
              delay: 3,
              duration: 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="grid grid-cols-11 gap-20 pt-[5rem] text-7xl max-sm:grid-cols-6 max-sm:pb-12"
          >
            <span className="text-[#FFD501]">
              <IoLogoJavascript />
            </span>
            <span className="text-[#E8612C]">
              <FaHtml5 />
            </span>
            <span className="text-[#118AC5]">
              <FaCss3Alt />
            </span>
            <span className="text-[#036C7E]">
              <FaReact />
            </span>
            <span className="text-[#513A76]">
              <FaBootstrap />
            </span>
            <span className="text-[#17B5B4]">
              <SiTailwindcss />
            </span>
            <span className="text-[#6D48B0]">
              <SiRedux />
            </span>
            <span className="text-[#7E1F28]">
              <SiReactquery />
            </span>
            <span className="text-[#F6C74D]">
              <SiStyledcomponents />
            </span>
            <span className="text-[#E84E34]">
              <FaSquareGit />
            </span>
            <span text>
              <IoLogoGithub />
            </span>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 gap-28 px-56 max-sm:grid-cols-1 max-sm:gap-0 max-sm:px-12">
          <div className=" flex flex-col items-center justify-center">
            <div>
              <h2 className="py-6 text-5xl">Hi there</h2>
              <Paragraph>
                I’m Said Magdy, currently I live in Menofia,egypt searching for
                a intership or position as a Frontend developer. i’m working
                with react.js and other library related with it, i’m open to
                learning new technologies and ready to work on new projects and
                work with a team.
              </Paragraph>
              <button className="flex items-center p-2  uppercase text-black duration-200 hover:bg-black hover:bg-opacity-20">
                <span className="pr-2 ">
                  <GoPaperAirplane />
                </span>
                <Link
                  to="/contact"
                  className="border-b-2 border-black duration-300  hover:border-0 "
                >
                  send me a message
                </Link>
              </button>
            </div>
            {/* icons */}
          </div>
          <div className="flex flex-col justify-end ">
            <div className="flex scale-75 rounded-br-full  rounded-tr-full bg-[#ffffff] p-12 ">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{
                  duration: 2,
                }}
                src={said}
                alt=""
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
