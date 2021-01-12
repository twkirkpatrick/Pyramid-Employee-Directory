import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const UserItem = ({ firstName, lastName, email, dob, phone, image }) => {
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <img src={image} alt="user" />
      </TableCell>
      <TableCell align="center">{firstName}</TableCell>
      <TableCell align="center">{lastName}</TableCell>
      <TableCell align="center">{email}</TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="center">{dob}</TableCell>
    </TableRow>
  );
};

export default UserItem;
