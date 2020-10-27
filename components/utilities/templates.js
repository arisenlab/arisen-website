import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    pageTitleLogo: {
        width: "70%",
        height: "70%",
    },
    picture: {
        width: "80%",
        height: "80%",
        borderRadius: "20px",
    },
}));

export const PageTitle = ({ logoURL, children }) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={1} alignItems="center">
                <Grid item md={6} align="center">
                    <img src={logoURL} className={classes.pageTitleLogo} />
                </Grid>

                <Grid item md={6}>
                    {children}
                </Grid>
            </Grid>
            <div style={{ height: 50 }} />
        </>
    );
};

export const ParagraphWithPicture = ({ imageURL, children, alter = false }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} alignItems="center">
            {!alter ? (
                <>
                    <Grid item md={6} align="center">
                        <img src={imageURL} className={classes.picture} />
                    </Grid>
                    <Grid item md={6}>
                        {children}
                    </Grid>
                </>
            ) : (
                <>
                    <Grid item md={6}>
                        {children}
                    </Grid>
                    <Grid item md={6} align="center">
                        <img src={imageURL} className={classes.picture} />
                    </Grid>
                </>
            )}
        </Grid>
    );
};
