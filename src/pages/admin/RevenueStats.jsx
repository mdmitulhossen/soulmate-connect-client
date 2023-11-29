import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const RevenueStats = ({ totalRevenue }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Revenue Statistics
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Total Revenue: ${totalRevenue}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RevenueStats;
