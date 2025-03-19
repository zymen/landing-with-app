import React from 'react';
import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  Typography,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Menu as MenuIcon,
  X
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Dashboard', icon: <LayoutDashboard size={22} />, path: '/app' },
    { text: 'Team', icon: <Users size={22} />, path: '/app/team' },
    { text: 'Settings', icon: <Settings size={22} />, path: '/app/settings' },
    { text: 'Help & Support', icon: <HelpCircle size={22} />, path: '/app/help' },
  ];

  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight="bold" color="primary">
          AppName
        </Typography>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle}>
            <X size={20} />
          </IconButton>
        )}
      </Box>
      <Divider />
      
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                py: 1.5,
                borderRadius: '0 24px 24px 0',
                mr: 2,
                '&:hover': {
                  backgroundColor: 'rgba(63, 81, 181, 0.08)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(63, 81, 181, 0.12)',
                  '&:hover': {
                    backgroundColor: 'rgba(63, 81, 181, 0.16)',
                  },
                },
              }}
              selected={item.path === '/app'}
            >
              <ListItemIcon sx={{ color: item.path === '/app' ? 'primary.main' : 'inherit', minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: item.path === '/app' ? 'bold' : 'normal',
                  color: item.path === '/app' ? 'primary.main' : 'inherit'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={onLogout} sx={{ py: 1.5 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <LogOut size={22} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      )}
      
      <Box
        component="nav"
        sx={{ width: { md: 240 }, flexShrink: { md: 0 } }}
      >
        {/* Mobile drawer */}
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
        
        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              borderRight: '1px solid',
              borderColor: 'divider',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Sidebar;
