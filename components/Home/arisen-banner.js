import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    homeButton: {
        "& > *": {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
    },
    logo: {
        width: "80%",
        height: "80%",
    },
    puzzleContainer: {
        position: "relative",
    },
    puzzle: {
        position: "absolute",
        top: -200,
        left: 100,
        width: 400,
        zIndex: -1,
    },
}));

const ArisenBanner = () => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <Grid container spacing={1} direction="row" alignItems="center">
            <Grid item align="center" md={6}>
                <img src="/Home/Home-Logo.png" className={classes.logo} />
            </Grid>
            <Grid item sm className={classes.puzzleContainer}>
                <img src="/Home/home_design1.png" className={classes.puzzle} />
            </Grid>
            <Grid item md={5}>
                <Typography variant="h3" component="h3">
                    Welcome to ARISEn
                </Typography>
                <Typography variant="h6">
                    We solve problems by building softwares to improve the life
                    in AdDU
                </Typography>

                <div className={classes.homeButton}>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: "#035B96", color: "#fff" }}
                        onClick={() => {
                            router.push("/projects");
                        }}
                    >
                        Projects
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => window.open("https://github.com/CZerkS")}
                        style={{ backgroundColor: "#333333", color: "#fff" }}
                    >
                        Github
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default ArisenBanner;
