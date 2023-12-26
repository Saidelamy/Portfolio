function Image({ src, alt, className }) {
  return (
    <>
      <img
        src={src}
        className={`pointer-events-none w-3/5 rounded-3xl max-sm:w-4/5 ${className}`}
        alt={alt}
      />
    </>
  );
}

export default Image;
