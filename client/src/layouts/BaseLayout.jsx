import { Outlet } from 'react-router-dom';
import TopNavbar from '../components/Nav/TopNavbar.jsx';
const BaseLayout = ({ children }) => {
  return (
    <div className="flex-1 h-[90%]">
      <TopNavbar />
      {children || <Outlet />}
    </div>
  );
};

export default BaseLayout;
