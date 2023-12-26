import { useState } from 'react';
import NavList from './NavList';
import { HiXMark } from 'react-icons/hi2';
import { FaAlignLeft } from 'react-icons/fa6';
import { AnimatePresence } from 'framer-motion';
import Logo from './../../ui/Logo';
import Social from '../../ui/Social';

function Nav() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="z-50 flex h-screen bg-[#111] p-5 text-white  max-sm:h-[6rem]">
      {isHidden ? null : (
        <AnimatePresence>
          <NavList onClick={() => setIsHidden((e) => !e)} />
        </AnimatePresence>
      )}

      <div className="grid max-sm:flex max-sm:items-center max-sm:justify-between ">
        <Logo />
        <div
          className="flex items-center justify-center
      "
        >
          <div className="z-50 max-sm:absolute max-sm:right-12">
            <span className="cursor-pointer text-3xl text-[#b1b1b1] duration-300 hover:text-sky-500 max-sm:hover:bg-white">
              {isHidden ? (
                <FaAlignLeft onClick={() => setIsHidden((e) => !e)} />
              ) : (
                <HiXMark onClick={() => setIsHidden((e) => !e)} />
              )}
            </span>
          </div>
        </div>
        <span className="flex items-end justify-center max-sm:hidden">
          <Social />
        </span>
      </div>
    </div>
  );
}

export default Nav;
