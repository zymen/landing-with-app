import React from 'react';
import { Box, Toolbar, useTheme } from '@mui/material';
import Sidebar from '../components/app/Sidebar';
import Dashboard from '../components/app/Dashboard';
import { AuthContext } from '../context/AuthContext';

// Custom hook to use auth context
function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const AppPage: React.FC = () => {
  const theme = useTheme();
  const { logout } = useAuth();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar onLogout={logout} />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 0, md: 0 },
          width: { md: `calc(100% - 240px)` },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Dashboard />
      </Box>
    </Box>
  );
};

export default AppPage;
