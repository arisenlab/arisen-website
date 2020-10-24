import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles(theme => ({
    footerContainer: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
    },
    mainContainer: {
        width: "100%",
        [theme.breakpoints.down("md")]: {
            margin: "auto",
            width: "80%",
        },
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainContainer}>
            <div style={{ height: 20 }} />
            <Grid container justify="center">
                <Grid item>
                    <Typography>
                        ARISEN Labs © 2020 - Passionately crafted by{" "}
                        <b>ARISEn Labs</b> {":)"}
                    </Typography>
                </Grid>
            </Grid>
            <div style={{ height: 10 }} />
        </div>
    );
};

export default Footer;
