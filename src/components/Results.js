import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from "@material-ui/data-grid";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./SearchBar";

//Initializing column fields for Material UI data grid
const columns = [
  { field: "id", headerName: "ID", width: 130 },
  {
    field: "image",
    headerName: "Image",
    width: 130,
    //Rendering an image tag for each image displayed in the DataGrid
    renderCell: (params) => (
      <img style={{ borderRadius: "50%" }} src={params.value} alt="headshot" />
    )
  },
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "lastName", headerName: "Last Name", width: 130 },
  { field: "email", headerName: "Email", width: 225 },
  { field: "phone", headerName: "Phone", width: 160 },
  { field: "dob", headerName: "DOB", width: 125, type: "date" }
];

//Material UI styles
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

//Beginning of Results component

const Results = () => {
  const classes = useStyles();

  //Two pieces of state, users and search-- utilizing the useState hook
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //Function to hit the Random User API endpoint
  const getUsers = async () => {
    const res = await axios.get(
      "https://randomuser.me/api/?results=100&nat=us&inc=name,email,dob,phone,id,picture"
    );

    //I added this function in order for the user objects to be sorted by last name in ascending order by default--personal preference and I think it looks cleaner.
    const sortedUsers = res.data.results.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      return 1;
    });
    //Passing the array of user objects into state
    setUsers(sortedUsers);
  };

  //Utilizing the useEffect hook to run the getUsers function after the component has loaded
  useEffect(() => {
    getUsers();
  }, []);

  //onChange function to set the user input to state--allows for the filter functionality
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  //Utilizing a filter method to create a new array of users that match the condition/filter preference set by the user's input
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
              //map method that is essential for implementation of the MUI DataGrid
              //These key value pairs correspond with the fields in the "columns" array (line 11) in order to populate the DataGrid
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
