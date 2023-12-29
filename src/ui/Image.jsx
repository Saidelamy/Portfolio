function Image({ src, alt, className }) {
  return (
    <>
      <img
        src={src}
        className={`pointer-events-none w-3/5 rounded-md duration-300 hover:scale-110 max-sm:w-4/5 ${className}`}
        alt={alt}
      />
    </>
  );
}

export default Image;
