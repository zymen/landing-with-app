import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container,
  useScrollTrigger,
  Slide,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

function HideOnScroll(props: { children: React.ReactElement }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Features', path: '#features' },
    { label: 'Pricing', path: '#pricing' },
    { label: 'About', path: '#about' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          AppName
        </Typography>
        <IconButton edge="end" color="inherit" aria-label="close drawer" onClick={handleDrawerToggle}>
          <X />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} component={Link} to={item.path} sx={{ justifyContent: 'center' }}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        {isAuthenticated ? (
          <>
            <ListItem component={Link} to="/app" sx={{ justifyContent: 'center' }}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={onLogout} sx={{ justifyContent: 'center' }}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <ListItem button component={Link} to="/login" sx={{ justifyContent: 'center' }}>
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          color="transparent" 
          elevation={0}
          sx={{
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
            transition: 'all 0.3s ease-in-out',
            boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
            color: 'primary.main'
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="h6"
                  component={Link}
                  to="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontWeight: 700,
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  AppName
                </Typography>
              </motion.div>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  color="inherit"
                >
                  <Menu />
                </IconButton>
              </Box>

              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                AppName
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{ 
                        my: 2, 
                        mx: 1.5,
                        color: 'inherit',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {isAuthenticated ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Button 
                        component={Link} 
                        to="/app" 
                        variant="text" 
                        color="inherit"
                        sx={{ mr: 1 }}
                      >
                        Dashboard
                      </Button>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Button 
                        onClick={onLogout} 
                        variant="outlined" 
                        color="inherit"
                      >
                        Logout
                      </Button>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button 
                      component={Link} 
                      to="#login-modal" 
                      variant="contained" 
                      color="primary"
                      sx={{ 
                        boxShadow: '0 4px 14px rgba(63, 81, 181, 0.4)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6)',
                        }
                      }}
                    >
                      Get Started
                    </Button>
                  </motion.div>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Toolbar /> {/* This is for spacing below the AppBar */}
    </>
  );
};

export default Header;
