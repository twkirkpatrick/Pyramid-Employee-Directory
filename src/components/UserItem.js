import React from "react";

const UserItem = ({ firstName, lastName, email, dob, phone, picture }) => {
  return (
    <div>
      <h1>{`${firstName} ${lastName}`}</h1>
      <ul>
        <li>{email}</li>
        <li>{dob}</li>
        <li>{phone}</li>
      </ul>
    </div>
  );
};

export default UserItem;
