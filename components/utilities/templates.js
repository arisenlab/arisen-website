import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    picture: {
        width: "80%",
        height: "80%",
        borderRadius: "20px",
    },
}));

const ParagraphWithPicture = ({ imageURL, children, alter = false }) => {
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

export default ParagraphWithPicture;
