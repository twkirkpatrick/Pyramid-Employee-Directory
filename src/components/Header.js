import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    backgroundColor: "rgba(20, 52, 65, 0.5)",
    fontSize: "30px"
  },
  icon: {
    fontSize: "70px",
    color: "lightgrey"
  },
  iconFlip: {
    transform: "scaleY(-1)",
    fontSize: "70px",
    color: "lightgrey"
  },
  header: {
    margin: "0 0 0 0",
    fontWeight: "600",
    color: "lightgrey"
  },
  logo: {
    fontWeight: "200"
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
            <h2 class={classes.header}>
              <span className={classes.logo}>Welcome To </span> Pyramid
            </h2>
            <FilterHdrIcon className={classes.iconFlip} />
          </Paper>
        </Grid>
      </div>
    </Container>
  );
};

export default Header;
