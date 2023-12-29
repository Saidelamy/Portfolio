function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center bg-[#F2F2F2] py-12 text-xl max-sm:mt-16 max-sm:py-2 max-sm:text-xl">
        <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-1 max-sm:gap-3">
          <div className="flex items-center">
            <span className="flex h-1 w-full items-center border-2 border-black max-sm:border-none"></span>
          </div>
          <span className="flex items-center text-black">
            <span className=" pr-2 text-2xl">&copy; </span>
            {new Date().getFullYear()} Designed by Said Magdy
          </span>
          <div className="flex items-center">
            <span className="flex h-1 w-full items-center border-2 border-black max-sm:border-none"></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
