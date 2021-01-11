import React, { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "./UserItem";

const Results = () => {
  /* const [filter, setFilter] = useState(""); */
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(
      "https://randomuser.me/api/?results=40&nat=us&inc=name,email,dob,phone,id,picture"
    );
    setUsers(res.data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <UserItem
          firstName={user.name.first}
          lastName={user.name.last}
          email={user.email}
          dob={user.dob.date}
          phone={user.phone}
          key={user.id.value}
          image={user.picture.thumbnail}
        />
      ))}
    </div>
  );
};

export default Results;
