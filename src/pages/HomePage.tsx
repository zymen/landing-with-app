import React, { useState } from 'react';
import { Box, useTheme, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import LoginModal from '../components/home/LoginModal';

// Import AuthContext
import { AuthContext } from '../context/AuthContext';

// Custom hook to use auth context
function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const HomePage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isAuthenticated, login, logout, loading } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  // Effect to redirect to app if already authenticated
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/app');
    }
  }, [isAuthenticated, navigate]);

  // Attach click handlers to all "Get Started" buttons
  React.useEffect(() => {
    const handleGetStartedClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' && 
        (target.textContent === 'Get Started' || target.textContent?.includes('Start free trial'))
      ) {
        e.preventDefault();
        handleOpenLoginModal();
      }
    };

    document.addEventListener('click', handleGetStartedClick);
    return () => {
      document.removeEventListener('click', handleGetStartedClick);
    };
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header isAuthenticated={isAuthenticated} onLogout={logout} />
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        
        {/* Login Link Section */}
        <Box 
          sx={{ 
            py: 6, 
            backgroundColor: theme.palette.background.paper,
            textAlign: 'center'
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h5" component="h2" gutterBottom>
              Ready to get started?
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Join thousands of teams already using our platform.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              onClick={handleOpenLoginModal}
              sx={{ 
                mt: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                boxShadow: '0 4px 14px rgba(63, 81, 181, 0.4)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6)',
                },
              }}
            >
              Login / Sign Up
            </Button>
          </Container>
        </Box>
      </Box>
      
      <Footer />
      
      <LoginModal 
        open={loginModalOpen} 
        onClose={handleCloseLoginModal} 
        onLogin={login}
        loading={loading}
      />
    </Box>
  );
};

export default HomePage;
