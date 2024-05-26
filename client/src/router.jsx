import { Navigate } from 'react-router-dom';
// Screens Certificate
import CertificateForm from './components/Certificate/CertificateForm.jsx';
import CertificateList from './components/Certificate/CertificateList.jsx';
import CertificateRecord from './components/Certificate/CertificateRecord.jsx';
import CertificateValidation from './components/Certificate/CertificateValidation.jsx';

// screens Fee Receipt
import StudentList from './components/FeeReceipt/StudentList.jsx';
import FeeReceiptPage from './components/FeeReceipt/FeeReceiptPage.jsx';
import StudentRecord from './components/FeeReceipt/StudentRecord.jsx';

// salary slip
import SalaryList from './components/Salary/SalaryList.jsx';
import SalaryPage from './components/Salary/SalaryPage.jsx';
import SalaryRecord from './components/Salary/SalaryRecord.jsx';

import HomePage from './screens/HomePage.jsx';
import Login from './screens/Auth/Login.jsx';
import Register from './screens/Auth/Register.jsx';

// layout
import BaseLayout from './layouts/BaseLayout.jsx';
import Sidebarlayout from './layouts/Sidebarlayout.jsx';

// require auth
import RequireAuth from './Utils/RequireAuth.js';
const routes = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register/:id',
        element: <Register />,
      },
      {
        path: 'homepage',
        element: <Navigate to="/" replace />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <RequireAuth />,
    children: [
      {
        path: '',
        element: <Sidebarlayout />,
        children: [
          {
            path: '',
            element: <Navigate to="dashboard" replace />,
          },
          {
            // path: 'dashboard/:id',
            path: 'dashboard',
            element: <StudentRecord />,
          },
          {
            path: 'studentrecord',
            element: <StudentRecord />,
          },
          {
            path: 'studentlist',
            element: <StudentList />,
          },

          {
            path: 'studentlist/:id',
            element: <FeeReceiptPage />,
          },
          {
            path: 'certificateForm/:id',
            element: <CertificateForm />,
          },
          {
            path: 'certificateDrop',
            element: <CertificateRecord />,
          },

          {
            path: 'certificatelist',
            element: <CertificateList />,
          },
          {
            path: 'validate',
            element: <CertificateValidation />,
          },
          {
            path: 'salarylist',
            element: <SalaryList />,
          },
          {
            path: 'salarylist/:sdrn',
            element: <SalaryPage />,
          },
          {
            path: 'salaryDrop',
            element: <SalaryRecord />,
          },
        ],
      },
    ],
  },
];

export default routes;
