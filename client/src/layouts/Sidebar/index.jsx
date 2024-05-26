import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SidebarMenu from './SidebarMenu';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        position: relative;
        z-index: 20;
        height: 100%;
        padding-bottom: 68px;
`
);

export default function Sidebar() {
  return (
    <SidebarWrapper
      sx={{
        display: {
          xs: 'none',
          lg: 'inline-block',
        },
        position: 'fixed',
        left: 0,
        top: 0,
      }}
    >
      <SidebarMenu />
    </SidebarWrapper>
  );
}
