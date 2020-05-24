import React from "react";
import { Toolbar, InputBase, makeStyles, Theme, createStyles, fade, Typography, Button } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import indigo from "@material-ui/core/colors/indigo";
import grey from "@material-ui/core/colors/grey";

const InputField = () => {
  const inputFieldStyle = makeStyles((theme: Theme) =>
    createStyles({
      inputField: {
        display: "flex",
      },
      search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.4),
        "&:hover": {
          backgroundColor: fade(theme.palette.common.white, 0.5),
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(1),
          width: "auto",
        },
      },
      inputRoot: {
        color: "inherit",
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1rem + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
      },
      searchButton: {
        marginLeft: "2rem",
        marginRight: "auto",
        position: "relative",
        color: theme.palette.getContrastText(indigo[500]),
        backgroundColor: indigo[500],
        "&:hover": {
          backgroundColor: indigo[700],
        },
        justifyContent: "flex-end",
      },
    })
  );
  const classes = inputFieldStyle();
  return (
    <div className={classes.inputField}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Search />
        </div>
        <InputBase
          placeholder="検索キーワード"
          classes={{ input: classes.inputInput, root: classes.inputRoot }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <Button variant="contained" className={classes.searchButton}>
        検索
      </Button>
    </div>
  );
};

const SearchBar: React.FC = () => {
  const ToolbarStyle = makeStyles((theme: Theme) =>
    createStyles({
      Toolbar: {
        color: theme.palette.getContrastText(grey[100]),
        backgroundColor: grey[100],
        display: "flex",
        justifyContent: "space-between",
        width: "70vw",
        marginLeft: "auto",
        marginRight: "auto",
      },
      searchBar: {
        marginTop: "16px",
        marginBottom: "16px",
      },
    })
  );
  const classes = ToolbarStyle();
  return (
    <header className={classes.searchBar}>
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h6" noWrap>
          Kagawa Gourmet Map
        </Typography>
        <InputField />
      </Toolbar>
    </header>
  );
};

export default SearchBar;
