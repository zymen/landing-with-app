import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              AppName
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              We're on a mission to transform how people interact with technology.
              Join us on this exciting journey.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="facebook" size="small" color="primary">
                <Facebook size={20} />
              </IconButton>
              <IconButton aria-label="twitter" size="small" color="primary">
                <Twitter size={20} />
              </IconButton>
              <IconButton aria-label="instagram" size="small" color="primary">
                <Instagram size={20} />
              </IconButton>
              <IconButton aria-label="linkedin" size="small" color="primary">
                <Linkedin size={20} />
              </IconButton>
              <IconButton aria-label="github" size="small" color="primary">
                <Github size={20} />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom fontWeight="bold">
              Product
            </Typography>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Features
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Pricing
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Testimonials
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              FAQ
            </Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom fontWeight="bold">
              Company
            </Typography>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              About
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Blog
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Careers
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Contact
            </Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom fontWeight="bold">
              Support
            </Typography>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Help Center
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Documentation
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Status
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Community
            </Link>
          </Grid>
          
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom fontWeight="bold">
              Legal
            </Typography>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Terms of Service
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              Cookie Policy
            </Link>
            <Link href="#" color="text.secondary" display="block" sx={{ mb: 1 }}>
              GDPR
            </Link>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 6, mb: 4 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} AppName. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Made with ❤️ for a better web
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
