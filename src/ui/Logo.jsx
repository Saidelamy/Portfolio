import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="z-50 flex items-start justify-center ">
      <Link to="/home">
        <img className="size-[4rem]" src="../../image/logo12.png" alt="" />
      </Link>
    </div>
  );
}

export default Logo;
