import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    projectsPicture: {
        width: "70%",
        height: "70%",
    },
}));

const ArisenProjects = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4">Projects</Typography>

            <div style={{ height: 20 }} />

            <div className={classes.projectsContainer}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item md={6} align="center">
                        <img
                            src="/Home/infopro-app.png"
                            className={classes.projectsPicture}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <Typography
                            gutterBottom={true}
                            variant="h4"
                            component="h1"
                        >
                            AdDU's InfoPro App
                        </Typography>
                        <Typography variant="body1" component="p">
                            AdDU's official mobile application for communication
                            with offices and browsing about Ateneo de Davao
                        </Typography>
                    </Grid>
                </Grid>

                <div style={{ height: 50 }} />

                <Grid container spacing={2} alignItems="center">
                    <Grid item md={6}>
                        <Typography
                            gutterBottom={true}
                            variant="h4"
                            component="h1"
                        >
                            AdDU's Alumni Web App
                        </Typography>
                        <Typography variant="body1" component="p">
                            AdDU's Alumni Web Application to make the Alumni
                            Office function well
                        </Typography>
                    </Grid>

                    <Grid item md={6} align="center">
                        <img
                            src="/Home/alumniapp-logo.jpg"
                            className={classes.projectsPicture}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default ArisenProjects;
