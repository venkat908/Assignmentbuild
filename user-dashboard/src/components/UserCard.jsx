import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UserCard = ({ user, onClick }) => (
  <Card sx={{ width: '100%' }} onClick={onClick}>
    <CardContent>
      <Typography variant="h6">{user.name}</Typography>
      <Typography>{user.address.city}</Typography>
    </CardContent>
  </Card>
);

export default UserCard;
