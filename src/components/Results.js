import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import UserItem from "./UserItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "./SearchBar";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Results = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    const res = await axios.get(
      "https://randomuser.me/api/?results=100&nat=us&inc=name,email,dob,phone,id,picture"
    );
    const sortedUsers = res.data.results.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      if (a.name.last > b.name.last) {
        return 1;
      }
      return 0;
    });
    setUsers(sortedUsers);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredUsers = users.filter((user) => {
    return (
      user.name.first.toLowerCase().indexOf(search) !== -1 ||
      user.name.last.toLowerCase().indexOf(search) !== -1 ||
      user.phone.indexOf(search) !== -1 ||
      user.email.indexOf(search) !== -1
    );
  });

  return (
    <Container maxWidth="md">
      <SearchBar onChange={onChange} />
      <Grid item xs={12}>
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
              {filteredUsers.map((user) => (
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
      </Grid>
    </Container>
  );
};

export default Results;
