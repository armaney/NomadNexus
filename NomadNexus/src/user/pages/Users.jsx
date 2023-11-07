import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'arman',
      image:
        'https://t.ly/SKUbI',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;

