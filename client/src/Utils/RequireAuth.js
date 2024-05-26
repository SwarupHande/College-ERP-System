import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router';

const RequireAuth = ({ children }) => {
  const store = useSelector((state) => state?.users);
  const { userAuth } = store;
  // console.log(userAuth);
  const location = useLocation();
  if (userAuth?.token) return children || <Outlet />;
  return (
    <Navigate
      to="/login"
      state={{
        from: location,
      }}
      replace
    />
  );
};

export default RequireAuth;
