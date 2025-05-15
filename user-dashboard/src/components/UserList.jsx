import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/users/userSlice';
import UserCard from './UserCard';
import { Grid, TextField, Pagination } from '@mui/material';

const UserList = ({ onUserClick }) => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const usersPerPage = 9;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = list.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const start = (page - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(start, start + usersPerPage);

  return (
    <div>
      <TextField
        label="Search by name or city"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <Grid container spacing={2}>
          {paginatedUsers.map((user) => (
            <UserCard key={user.id} user={user} onClick={() => onUserClick(user)} />
          ))}
        </Grid>
      )}
      <Pagination
        count={Math.ceil(filteredUsers.length / usersPerPage)}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{ mt: 2 }}
      />
    </div>
  );
};

export default UserList;
