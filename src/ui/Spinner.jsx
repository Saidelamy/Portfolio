function Spinner() {
  return (
    <>
      <div className="flex gap-2">
        <div className="h-4 w-4 animate-pulse rounded-full bg-gray-400"></div>
        <div className="h-4 w-4 animate-pulse rounded-full bg-gray-500"></div>
        <div className="h-4 w-4 animate-pulse rounded-full bg-gray-500"></div>
        <div className="h-4 w-4 animate-pulse rounded-full bg-gray-400"></div>
      </div>
    </>
  );
}

export default Spinner;
