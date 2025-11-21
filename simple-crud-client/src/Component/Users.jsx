import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = id => {
    const proceed = confirm("Are you sure to delete?");
    if(proceed){
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount > 0){
          alert("Deleted Successfully!");

          const remaining = users.filter(u => u._id !== id);
          setUsers(remaining);
        }
      });
    }
  };

  return (
    <div>
      <h2>Total Users: {users.length}</h2>

      <ul>
        {
          users.map(user => 
            <li key={user._id}>
              {user.name} — {user.email}
              <button onClick={() => handleDelete(user._id)}>X</button>
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
