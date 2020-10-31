import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
    loadingContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.loadingContainer}>
            <CircularProgress />
        </div>
    );
};

export default Loading;
