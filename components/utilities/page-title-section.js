import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    logo: {
        width: "70%",
        height: "70%",
    },
}));

const PageTitleSection = ({ logoURL, title, subtitle }) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={1} alignItems="center">
                <Grid item md={6} align="center">
                    <img src={logoURL} className={classes.logo} />
                </Grid>

                <Grid item md={6}>
                    <Typography gutterBottom={true} variant="h3">
                        {title}
                    </Typography>

                    <Typography variant="h6" compoenent="body">
                        {subtitle}
                    </Typography>
                </Grid>
            </Grid>
            <div style={{ height: 50 }} />
        </>
    );
};

export default PageTitleSection;
