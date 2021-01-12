import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import UserItem from "./UserItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Results = () => {
  const classes = useStyles();

  /* const [filter, setFilter] = useState(""); */
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios.get(
      "https://randomuser.me/api/?results=100&nat=us&inc=name,email,dob,phone,id,picture"
    );
    setUsers(res.data.results);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container maxWidth="md">
      <TableContainer component={Paper} style={{ marginTop: "2rem" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="center">First</TableCell>
              <TableCell align="center">Last</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">DOB</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Results;
