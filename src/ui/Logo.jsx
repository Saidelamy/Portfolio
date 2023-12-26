import { Link } from 'react-router-dom';
import logo from '../../image/logo12.png';
function Logo() {
  return (
    <div className="z-50 flex items-start justify-center ">
      <Link to="/">
        <img className="size-[4rem]" src={logo} alt="" />
      </Link>
    </div>
  );
}

export default Logo;
