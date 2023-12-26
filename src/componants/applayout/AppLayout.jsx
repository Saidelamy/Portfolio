import { Outlet } from 'react-router-dom';
import styles from './AppLayout.module.css';
import Nav from '../nav/Nav';
import Footer from '../Footer';
function AppLayout() {
  return (
    <div className={`${styles.applayout} grid h-screen`}>
      <Nav />
      <div className="overflow-x-hidden overflow-y-scroll bg-[#F2F2F2] text-[#000]">
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
