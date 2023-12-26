import { NavLink } from 'react-router-dom';

function List() {
  const classNameFunc = ({ isActive }) => (isActive ? 'active_link' : '');

  return (
    <>
      <li className="py-3">
        <NavLink to="/home" className={classNameFunc}>
          Home
        </NavLink>
      </li>
      <li className="py-3">
        <NavLink to="/about" className={classNameFunc}>
          About
        </NavLink>
      </li>
      <li className="py-3">
        <NavLink to="/contact" className={classNameFunc}>
          Contact
        </NavLink>
      </li>
    </>
  );
}

export default List;
