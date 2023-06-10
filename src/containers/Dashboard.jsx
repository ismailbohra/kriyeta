import React from 'react';
import { useTheme } from '@mui/material/styles';

function Dashboard() {
  const theme = useTheme();

  return (
    <div>
      <h1 style={{ color: theme.palette.primary.main }}>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
