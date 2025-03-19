import React from 'react';
import { 
  Box, 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardHeader, 
  Container, 
  Grid, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Switch,
  FormControlLabel,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const theme = useTheme();
  const [annual, setAnnual] = React.useState(true);

  const handleBillingChange = () => {
    setAnnual(!annual);
  };

  const tiers = [
    {
      title: 'Free',
      price: 0,
      description: 'Perfect for individuals just getting started',
      features: [
        'Up to 5 projects',
        '1 GB storage',
        'Basic analytics',
        'Email support',
      ],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most Popular',
      price: annual ? 15 : 19,
      description: 'Everything you need for small teams',
      features: [
        'Unlimited projects',
        '10 GB storage',
        'Advanced analytics',
        'Priority email support',
        'Team collaboration',
        'Custom integrations',
      ],
      buttonText: 'Start free trial',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: annual ? 49 : 59,
      description: 'Advanced features for larger organizations',
      features: [
        'Unlimited everything',
        '100 GB storage',
        'Enterprise analytics',
        '24/7 phone & email support',
        'Advanced security',
        'Custom branding',
        'Dedicated account manager',
      ],
      buttonText: 'Contact sales',
      buttonVariant: 'outlined',
    },
  ];

  return (
    <Box
      id="pricing"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
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
              Pricing
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
              Simple, Transparent Pricing
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
              sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}
            >
              Choose the plan that works best for you and your team. All plans come with a 14-day money-back guarantee.
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FormControlLabel
              control={
                <Switch 
                  checked={annual} 
                  onChange={handleBillingChange} 
                  color="primary" 
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      mr: 1, 
                      color: !annual ? 'text.primary' : 'text.secondary',
                      fontWeight: !annual ? 'bold' : 'normal',
                    }}
                  >
                    Monthly
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      ml: 1, 
                      color: annual ? 'text.primary' : 'text.secondary',
                      fontWeight: annual ? 'bold' : 'normal',
                    }}
                  >
                    Annual <Box component="span" sx={{ color: 'success.main' }}>Save 20%</Box>
                  </Typography>
                </Box>
              }
              labelPlacement="end"
            />
          </motion.div>
        </Box>

        <Grid container spacing={4} alignItems="flex-end">
          {tiers.map((tier, index) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Pro' ? 12 : 6}
              md={4}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    transform: tier.title === 'Pro' ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: tier.title === 'Pro' 
                      ? '0 8px 40px rgba(0,0,0,0.12)' 
                      : '0 2px 10px rgba(0,0,0,0.08)',
                    '&:hover': {
                      boxShadow: '0 10px 50px rgba(0,0,0,0.15)',
                      transform: tier.title === 'Pro' ? 'scale(1.07)' : 'scale(1.02)',
                    },
                    border: tier.title === 'Pro' ? `2px solid ${theme.palette.primary.main}` : 'none',
                    position: 'relative',
                    overflow: 'visible',
                  }}
                >
                  {tier.subheader && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        py: 0.5,
                        px: 2,
                        borderRadius: 5,
                        fontWeight: 'bold',
                        fontSize: '0.75rem',
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}
                    >
                      {tier.subheader}
                    </Box>
                  )}
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: 'center', fontWeight: 'bold' }}
                    sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                      <Typography component="h3" variant="h3" color="text.primary">
                        ${tier.price}
                        <Typography variant="h6" color="text.secondary" component="span">
                          /mo
                        </Typography>
                      </Typography>
                      {annual && tier.price > 0 && (
                        <Typography variant="subtitle2" color="success.main">
                          Billed annually (${tier.price * 12}/year)
                        </Typography>
                      )}
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {tier.description}
                      </Typography>
                    </Box>
                    <List sx={{ mb: 2 }}>
                      {tier.features.map((feature) => (
                        <ListItem key={feature} sx={{ py: 1, px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Check size={20} color={theme.palette.primary.main} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant as 'outlined' | 'contained'}
                      color="primary"
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        maxWidth: '80%',
                        ...(tier.buttonVariant === 'contained' && {
                          boxShadow: '0 4px 14px rgba(63, 81, 181, 0.4)',
                          '&:hover': {
                            boxShadow: '0 6px 20px rgba(63, 81, 181, 0.6)',
                          },
                        }),
                      }}
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;
