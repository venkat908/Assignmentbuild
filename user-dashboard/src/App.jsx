import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import UserList from './components/UserList';
import UserDetailsModal from './components/UserDetailsModal';
import AddUserForm from './components/AddUserForm';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>UserConnect Dashboard</Typography>
      <UserList onUserClick={setSelectedUser} />
      <UserDetailsModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      <AddUserForm />
    </Container>
  );
};

export default App;
