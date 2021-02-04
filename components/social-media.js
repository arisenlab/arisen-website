import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles(theme => ({
    scContainer: {
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        position: "fixed",
        display: "flex",
        flexDirection: "column",
    },
    twitterIcon: {
        marginTop: theme.spacing(1),
        backgroundColor: "#1DA1F2",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#2797db",
        },
    },
    facebookIcon: {
        marginTop: theme.spacing(1),
        backgroundColor: "#4267B2",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#395a9e",
        },
    },
    emailIcon: {
        marginTop: theme.spacing(1),
        backgroundColor: "#D44638",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#bf4034",
        },
    },
}));

const SocialMedia = () => {
    const classes = useStyles();

    return (
        <div className={classes.scContainer}>
            <Fab
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.twitterIcon}
                onClick={() => window.open("https://twitter.com/addu_arisen")}
            >
                <TwitterIcon />
            </Fab>
            <Fab
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.facebookIcon}
                onClick={() =>
                    window.open("https://www.facebook.com/adduarisen")
                }
            >
                <FacebookIcon />
            </Fab>
            <Fab
                size="medium"
                color="secondary"
                aria-label="add"
                className={classes.emailIcon}
                onClick={() => {
                    window.open("mailto:arisenlab@addu.edu.ph");
                }}
            >
                <EmailIcon />
            </Fab>
        </div>
    );
};

export default SocialMedia;
