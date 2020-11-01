import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import { ParagraphWithPicture } from "../utilities/templates";

const useStyles = makeStyles(theme => ({
    projectsPicture: {
        width: "70%",
        height: "70%",
    },
}));

const ArisenProjects = ({ projects }) => {
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
                            <div key={project.acf.project_name}>
                                <ParagraphWithPicture
                                    imageURL={project.acf.home_logo}
                                    alter={mustAlter}
                                    imagePercent="70%"
                                >
                                    <Typography
                                        gutterBottom={true}
                                        variant="h4"
                                        component="h1"
                                    >
                                        {project.acf.project_name}
                                    </Typography>
                                    <Typography variant="body1" component="p">
                                        {project.acf.description}
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
