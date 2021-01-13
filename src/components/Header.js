import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";

//Material UI styles
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    backgroundColor: "rgba(20, 52, 65, 0.5)"
  },
  icon: {
    fontSize: "70px",
    color: "lightgrey",
    marginBottom: "0",
    position: "relative",
    top: "18px"
  },
  iconFlip: {
    transform: "scaleY(-1)",
    fontSize: "70px",
    color: "lightgrey",
    margin: "0"
  },
  header: {
    margin: "0",
    fontWeight: "600",
    color: "lightgrey",
    fontSize: "60px"
  },
  border: {
    borderBottom: "1px solid lightgrey",
    width: "45%",
    margin: "auto"
  },
  logo: {
    fontWeight: "200",
    fontSize: "45px",
    margin: "0",
    color: "lightgrey"
  },
  headline: {
    fontSize: "20px",
    margin: "0",
    marginBottom: "10px",
    color: "lightgrey"
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FilterHdrIcon className={classes.icon} />
            <h2 className={classes.header}>
              <span className={classes.logo}>Welcome To </span> Pyramid
            </h2>
            <p className={classes.headline}>
              Keeping all of your employee information handy from the top down.
            </p>
            <div className={classes.border}></div>
            <FilterHdrIcon className={classes.iconFlip} />
          </Paper>
        </Grid>
      </div>
    </Container>
  );
};

export default Header;
