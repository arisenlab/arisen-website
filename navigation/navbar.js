import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Link from "next/link";

import routes from "./routes";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    linkStyle: {
        margin: theme.spacing(1),
    },
    arisenLogo: {
        width: "calc(150px + 1vw)",
        marginTop: "10px",
        marginBottom: "10px",
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
            {routes.map(link => {
                return (
                    <Link href={link.pageURL} key={link.linkName}>
                        <Button
                            variant="text"
                            color="secondary"
                            href="#"
                            className={classes.linkStyle}
                        >
                            <Typography>{link.linkName}</Typography>
                        </Button>
                    </Link>
                );
            })}
        </>
    );
}
