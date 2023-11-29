import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BiodataStats = ({ total, male, female, premium }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Biodata Statistics
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Total Biodata: {total}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Male Biodata: {male}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Female Biodata: {female}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Premium Biodata: {premium}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BiodataStats;
