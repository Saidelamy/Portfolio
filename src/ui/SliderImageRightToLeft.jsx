import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function SliderImageRightToLeft({ children }) {
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
        initial={{ x: [0, width] }}
        animate={{ x: [-width, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-4 "
      >
        {children}
      </motion.div>
    </>
  );
}

export default SliderImageRightToLeft;
