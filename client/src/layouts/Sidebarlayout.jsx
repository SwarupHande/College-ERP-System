import React from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar/index.jsx';
export default function Sidebarlayout() {
  return (
    <>
      <Box
        className=" bg-gray-200 antialiased text-gray-900"
        sx={{
          flex: 1,
          height: '100%',
        }}
      >
        <Sidebar />
        <Box
          sx={{
            position: 'relative',
            display: 'block',
            flex: 1,
            ml: {
              xs: 0,
              lg: 35,
            },
          }}
        >
          <Box display="block">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
}
