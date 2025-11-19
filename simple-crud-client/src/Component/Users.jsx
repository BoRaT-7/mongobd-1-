import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h2>Total Users: {users.length}</h2>

      <ul>
        {
          users.map(user => 
            <li key={user._id}>
              {user.name} — {user.email}
            </li>
          )
        }
      </ul>

      <br />
      <a href="/">Add New User</a>
    </div>
  );
};

export default Users;
