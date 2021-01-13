import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./SearchBar";

const columns = [
  { field: "id", headerName: "ID", width: 130 },
  {
    field: "image",
    headerName: "Image",
    width: 130,
    renderCell: (params) => <img src={params.value} alt="headshot" />
  },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "email", headerName: "Email", width: 225 },
  { field: "phone", headerName: "Phone", width: 160 },
  { field: "dob", headerName: "DOB", width: 125, type: "date" }
];

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
      return 1;
    });
    setUsers(sortedUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  let filteredUsers = users.filter((user) => {
    return (
      user.name.first.indexOf(search) !== -1 ||
      user.id.value.indexOf(search) !== -1 ||
      user.name.last.indexOf(search) !== -1 ||
      user.phone.indexOf(search) !== -1 ||
      user.email.indexOf(search) !== -1
    );
  });

  return (
    <Container maxWidth="md">
      <SearchBar onChange={onChange} />
      <Grid item xs={12}>
        <div
          style={{
            height: 400,
            width: "100%",
            backgroundColor: "white",
            marginTop: "20px"
          }}
        >
          <DataGrid
            rows={filteredUsers.map((user) => ({
              id: user.id.value,
              firstName: user.name.first,
              lastName: user.name.last,
              email: user.email,
              phone: user.phone,
              dob: new Date(user.dob.date),
              image: user.picture.thumbnail
            }))}
            columns={columns}
            pageSize={100}
            hideFooter={true}
            disableColumnMenu={true}
          />
        </div>
      </Grid>
    </Container>
  );
};
export default Results;
