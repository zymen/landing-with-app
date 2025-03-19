import React from 'react';
import { Box, Container, Typography, Grid, Avatar, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, company, avatar, delay }) => {
  const theme = useTheme();
  
  return (
    <Grid item xs={12} md={4}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
      >
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
              transform: 'translateY(-5px)',
            },
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              left: 20,
              fontSize: '4rem',
              color: theme.palette.primary.main,
              opacity: 0.2,
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
            }}
          >
            "
          </Box>
          <CardContent sx={{ flexGrow: 1, pt: 4 }}>
            <Typography variant="body1" paragraph sx={{ mb: 3, fontStyle: 'italic' }}>
              {quote}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar 
                src={avatar} 
                alt={name}
                sx={{ 
                  width: 50, 
                  height: 50,
                  mr: 2,
                  border: `2px solid ${theme.palette.primary.main}`
                }}
              />
              <Box>
                <Typography variant="subtitle1" fontWeight="bold">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {title}, {company}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "This platform has completely transformed how our team collaborates. We've seen a 40% increase in productivity since implementing it.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "The intuitive interface and powerful features make this the best solution we've used. Customer support is also exceptional.",
      name: "Michael Chen",
      title: "Product Manager",
      company: "InnovateLabs",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      quote: "We've tried many similar products, but none compare to the ease of use and comprehensive feature set. It's been a game-changer for us.",
      name: "Emily Rodriguez",
      title: "Marketing Director",
      company: "GrowthMedia",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <Box
      id="testimonials"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
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
              Testimonials
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
              What Our Customers Say
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
              Don't just take our word for it. Here's what our customers have to say about their experience.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              avatar={testimonial.avatar}
              delay={0.1 * index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
