import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Moment from "react-moment";

const UserItem = ({ firstName, lastName, email, dob, phone, image }) => {
  return (
    <TableRow hover={true}>
      <TableCell component="th" scope="row">
        <img src={image} alt="user" />
      </TableCell>
      <TableCell align="center">{firstName}</TableCell>
      <TableCell align="center">{lastName}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center">
        <Moment format="MM-DD-YYYY">{dob}</Moment>
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
