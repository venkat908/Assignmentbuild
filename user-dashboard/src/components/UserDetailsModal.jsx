import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

const UserDetailsModal = ({ user, onClose }) => {
  if (!user) return null;
  return (
    <Dialog open={!!user} onClose={onClose} fullWidth>
      <DialogTitle>{user.name}</DialogTitle>
      <DialogContent>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
        <Typography>Website: {user.website}</Typography>
        <Typography>Company: {user.company.name}</Typography>
        <Typography>Address: {user.address.street}, {user.address.city}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default UserDetailsModal;
