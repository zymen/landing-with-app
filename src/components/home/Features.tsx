import React from 'react';
import { Box, Container, Grid, Typography, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, BarChart, Clock, Settings } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              width: 60,
              height: 60,
              borderRadius: '12px',
              backgroundColor: 'primary.main',
              color: 'white',
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
            {description}
          </Typography>
        </Paper>
      </motion.div>
    </Grid>
  );
};

const Features: React.FC = () => {
  const theme = useTheme();
  
  const features = [
    {
      icon: <Zap size={24} />,
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our optimized platform built for speed.',
    },
    {
      icon: <Shield size={24} />,
      title: 'Secure by Design',
      description: 'Your data is protected with enterprise-grade security and encryption.',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration tools.',
    },
    {
      icon: <BarChart size={24} />,
      title: 'Advanced Analytics',
      description: 'Gain valuable insights with comprehensive analytics and reporting.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Time-Saving Automation',
      description: 'Automate repetitive tasks and focus on what matters most.',
    },
    {
      icon: <Settings size={24} />,
      title: 'Customizable Workflow',
      description: 'Tailor the platform to your specific needs with flexible customization options.',
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              component="span"
              variant="overline"
              color="primary"
              fontWeight="bold"
            >
              Features
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography
              component="h2"
              variant="h3"
              color="text.primary"
              fontWeight="bold"
              gutterBottom
            >
              Powerful Features for Modern Teams
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              Our platform is packed with powerful features designed to help you work smarter, not harder.
              Discover what sets us apart from the competition.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.1 * index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
