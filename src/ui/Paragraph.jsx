function Paragraph({ children, className }) {
  return (
    <>
      <p className={`py-6 text-[#000000]  ${className}`}>{children}</p>
    </>
  );
}

export default Paragraph;
