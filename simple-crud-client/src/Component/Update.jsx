import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
  const loadedUser = useLoaderData();

  return (
    <div>
      <h3>Update information of {loadedUser?.name}</h3>

      <form>
        <input
          type="text"
          name="name"
          defaultValue={loadedUser?.name}
        />
        <br />

        <input
          type="email"
          name="email"
          defaultValue={loadedUser?.email}
        />
        <br />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
