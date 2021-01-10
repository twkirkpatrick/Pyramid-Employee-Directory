import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(3),
    width: "100%"
  }
}));

const SearchBar = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="input-with-icon-adornment"
            style={{ color: "lightgrey" }}
          >
            Filter Employees by Name, Address, Phone Number
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            style={{ borderBottom: "1px solid lightgrey", color: "lightgrey" }}
          />
        </FormControl>
      </Grid>
    </Container>
  );
};

export default SearchBar;
