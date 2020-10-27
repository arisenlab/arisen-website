import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import { ParagraphWithPicture } from "../utilities/templates";

import projects from "../../data/projects";

const useStyles = makeStyles(theme => ({
    projectsPicture: {
        width: "70%",
        height: "70%",
    },
}));

const ArisenProjects = () => {
    const classes = useStyles();

    let counter = 0;

    return (
        <div>
            <Typography variant="h4">Projects</Typography>

            <div style={{ height: 30 }} />
            <div className={classes.projectsContainer}>
                <Grid container spacing={2} alignItems="center">
                    {projects.map(project => {
                        let mustAlter = counter % 2 !== 0 ? true : false;
                        counter++;
                        return (
                            <div key={project.id}>
                                <ParagraphWithPicture
                                    imageURL={project.logo}
                                    alter={mustAlter}
                                    imagePercent="70%"
                                >
                                    <Typography
                                        gutterBottom={true}
                                        variant="h4"
                                        component="h1"
                                    >
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {project.description}
                                    </Typography>
                                </ParagraphWithPicture>

                                <div style={{ marginBottom: 30 }} />
                            </div>
                        );
                    })}
                </Grid>
            </div>
        </div>
    );
};

export default ArisenProjects;
