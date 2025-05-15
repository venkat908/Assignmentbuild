import React from 'react';
import { useForm } from 'react-hook-form';
import { addUser } from '../features/users/UserAPI';
import { TextField, Button, Box, Snackbar } from '@mui/material';

const AddUserForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [open, setOpen] = React.useState(false);
  const onSubmit = async (data) => {
    await addUser(data);
    try {
      setOpen(true);
      reset();
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 4 }}>
      <TextField
        label="Name"
        fullWidth
        {...register('name', { required: true })}
        error={!!errors.name}
        helperText={errors.name && 'Name is required'}
        margin="normal"
      />
      <TextField
        label="Email"
        fullWidth
        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
        error={!!errors.email}
        helperText={errors.email && 'Valid email required'}
        margin="normal"
      />
      <TextField
        label="Username"
        fullWidth
        {...register('username', { required: true })}
        error={!!errors.username}
        helperText={errors.username && 'Username is required'}
        margin="normal"
      />
      <TextField label="Phone" fullWidth {...register('phone', { required: true })}
        error={!!errors.phone}
        helperText={errors.phone && 'phone is required'}
        margin="normal" />
      <TextField label="Website" fullWidth {...register('website', { required: true })}
        error={!!errors.website}
        helperText={errors.website && 'website is required'}
        margin="normal" />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Add User</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        message="User added successfully!"
        autoHideDuration={3000}
      />
    </Box>
  );
};

export default AddUserForm;
