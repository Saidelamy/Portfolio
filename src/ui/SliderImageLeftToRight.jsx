import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function SliderImageLeftToRight({ children }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <motion.div
        ref={carousel}
        drag="x"
        initial={{ x: [width, 0] }}
        animate={{ x: [0, -width] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-10 "
      >
        {children}
      </motion.div>
    </>
  );
}

export default SliderImageLeftToRight;
