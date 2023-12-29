import styles from './Home.module.css';
import { motion } from 'framer-motion';
import Project1 from './Projects/Project1';
import Project2 from './Projects/Project2';
import Project3 from './Projects/Project3';
import Project4 from './Projects/Project4';
import LandingPage from './LandingPage';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Said Magdy</title>
      </Helmet>
      <motion.section
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ y: '-100vh', opacity: 0 }}
        className={`${styles.home} text-[#000]`}
      >
        {/* landing section */}
        <LandingPage />
        <div className="grid grid-rows-1 px-[150px] pb-14 max-sm:px-12">
          <Project1 />
        </div>
      </motion.section>
      <div className="grid grid-rows-3 gap-10 px-[150px] max-sm:px-12">
        <Project2 />
        <Project3 />
        <Project4 />
      </div>
    </>
  );
}

export default Home;
