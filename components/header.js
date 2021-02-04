import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";

import { mediaURL } from "../utils/constants";

import Nav from "../navigation/navbar";
import NavBurger from "../navigation/nav-burger";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
    },
    arisenLogo: {
        width: "calc(130px + 1.5vw)",
        marginTop: "10px",
        marginBottom: "10px",
    },
    menuButton: {
        marginRight: theme.spacing(1),
        display: "block",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
    navLinks: {
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            display: "block",
        },
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [drawer, setDrawer] = React.useState(false);

    const toggleDrawer = open => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawer(open);
    };

    return (
        <div>
            <AppBar
                position="fixed"
                style={{ backgroundColor: "#fff", zIndex: 1 }}
            >
                <Toolbar>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        edge="start"
                        className={classes.menuButton}
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Drawer
                        anchor={"left"}
                        open={drawer}
                        onClose={toggleDrawer(false)}
                    >
                        <NavBurger
                            onChosen={() => {
                                setDrawer(false);
                            }}
                        />
                    </Drawer>

                    <div className={classes.title}>
                        <img
                            src={`${mediaURL}/2020/11/arisen_logo.png`}
                            className={classes.arisenLogo}
                        />
                    </div>
                    <div className={classes.navLinks}>
                        <Nav />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
