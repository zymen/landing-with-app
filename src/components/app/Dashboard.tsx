import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Card, 
  CardContent, 
  CardHeader,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  LinearProgress,
  Button,
  useTheme
} from '@mui/material';
import { 
  TrendingUp, 
  Users, 
  BarChart2, 
  Clock,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  increase: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, increase, delay }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 80,
              height: 80,
              background: `${color}10`,
              borderRadius: '0 0 0 100%',
            }}
          />
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
              borderRadius: 2,
              backgroundColor: `${color}20`,
              color: color,
              mb: 2,
            }}
          >
            {icon}
          </Box>
          
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {title}
          </Typography>
          
          <Typography variant="h4" component="div" fontWeight="bold" gutterBottom>
            {value}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
            <TrendingUp size={16} color="green" />
            <Typography variant="body2" color="success.main" sx={{ ml: 0.5 }}>
              {increase}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
              vs last month
            </Typography>
          </Box>
        </Paper>
      </motion.div>
    </Grid>
  );
};

const Dashboard: React.FC = () => {
  const theme = useTheme();
  
  const stats = [
    {
      title: 'Total Users',
      value: '2,543',
      icon: <Users size={24} />,
      color: theme.palette.primary.main,
      increase: '12%',
    },
    {
      title: 'Active Projects',
      value: '48',
      icon: <BarChart2 size={24} />,
      color: theme.palette.success.main,
      increase: '8%',
    },
    {
      title: 'Completed Tasks',
      value: '324',
      icon: <Clock size={24} />,
      color: theme.palette.warning.main,
      increase: '24%',
    },
    {
      title: 'Revenue',
      value: '$12,500',
      icon: <TrendingUp size={24} />,
      color: theme.palette.info.main,
      increase: '18%',
    },
  ];

  const projects = [
    {
      name: 'Website Redesign',
      progress: 75,
      team: 'Design Team',
      deadline: '2 days left',
      avatar: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    {
      name: 'Mobile App Development',
      progress: 45,
      team: 'Development Team',
      deadline: '1 week left',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    {
      name: 'Marketing Campaign',
      progress: 90,
      team: 'Marketing Team',
      deadline: 'Due tomorrow',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
  ];

  const activities = [
    {
      user: 'John Doe',
      action: 'completed task',
      subject: 'Update user interface',
      time: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    {
      user: 'Sarah Smith',
      action: 'commented on',
      subject: 'Mobile app design',
      time: '4 hours ago',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    {
      user: 'Michael Johnson',
      action: 'created project',
      subject: 'New marketing campaign',
      time: 'Yesterday',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
    {
      user: 'Emily Wilson',
      action: 'uploaded files to',
      subject: 'Project documentation',
      time: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Welcome back! Here's an overview of your projects and activities.
        </Typography>
      </motion.div>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
            increase={stat.increase}
            delay={0.1 * index}
          />
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Projects */}
        <Grid item xs={12} md={7}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: 2,
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                height: '100%',
              }}
            >
              <CardHeader
                title="Active Projects"
                action={
                  <Button
                    endIcon={<ChevronRight size={16} />}
                    color="primary"
                    size="small"
                  >
                    View All
                  </Button>
                }
              />
              <Divider />
              <CardContent>
                {projects.map((project, index) => (
                  <Box key={index} sx={{ mb: index !== projects.length - 1 ? 3 : 0 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {project.deadline}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Avatar
                        src={project.avatar}
                        alt={project.team}
                        sx={{ width: 24, height: 24, mr: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {project.team}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ flexGrow: 1, mr: 2 }}>
                        <LinearProgress
                          variant="determinate"
                          value={project.progress}
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: 'rgba(0, 0, 0, 0.08)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 3,
                            },
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {project.progress}%
                      </Typography>
                    </Box>
                    {index !== projects.length - 1 && <Divider sx={{ mt: 3 }} />}
                  </Box>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={5}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <Card
              elevation={0}
              sx={{
                borderRadius: 2,
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                height: '100%',
              }}
            >
              <CardHeader
                title="Recent Activity"
                action={
                  <Button
                    endIcon={<ChevronRight size={16} />}
                    color="primary"
                    size="small"
                  >
                    View All
                  </Button>
                }
              />
              <Divider />
              <CardContent sx={{ p: 0 }}>
                <List>
                  {activities.map((activity, index) => (
                    <React.Fragment key={index}>
                      <ListItem alignItems="flex-start" sx={{ px: 3, py: 2 }}>
                        <ListItemAvatar>
                          <Avatar src={activity.avatar} alt={activity.user} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography variant="body2">
                              <Typography component="span" fontWeight="bold">
                                {activity.user}
                              </Typography>{' '}
                              {activity.action}{' '}
                              <Typography component="span" fontWeight="medium" color="primary.main">
                                {activity.subject}
                              </Typography>
                            </Typography>
                          }
                          secondary={
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                              {activity.time}
                            </Typography>
                          }
                        />
                      </ListItem>
                      {index !== activities.length - 1 && <Divider component="li" />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
