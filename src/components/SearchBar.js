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
    marginTop: "1.5rem",
    width: "100%"
  }
}));

const SearchBar = ({ onChange }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Grid item xs={12}>
        <FormControl className={classes.margin}>
          <InputLabel
            htmlFor="input-with-icon-adornment"
            style={{ color: "lightgrey" }}
          >
            Filter Employees by Name, Phone Number, Email, or ID
          </InputLabel>
          <Input
            onChange={onChange}
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle style={{ color: "white" }} />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
    </Container>
  );
};

export default SearchBar;
