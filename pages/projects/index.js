import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import dynamic from "next/dynamic";
const PageTitleSection = dynamic(() =>
    import("../../components/utilities/templates").then(
        template => template.PageTitle
    )
);

const ProjectCard = dynamic(() =>
    import("../../components/Projects/project-card-item")
);

import projectInfo from "../../data/projects";

const useStyles = makeStyles(theme => ({
    projectsContainer: {
        margin: "auto",
        width: "80%",
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const Projects = ({ projectInfo }) => {
    const classes = useStyles();
    const [currentProject, setCurrentProject] = React.useState(null);

    const handleClickOpen = project => {
        setCurrentProject(project);
    };

    const handleClose = () => {
        setCurrentProject(null);
    };

    return (
        <div className={classes.projectsContainer}>
            <div style={{ height: 150 }} />

            <PageTitleSection logoURL="/Projects/projects-logo.png">
                <Typography variant="h3">Projects</Typography>

                <Typography variant="h5" gutterBottom>
                    ARISEn’s hard worked projects
                </Typography>

                <Typography variant="body1">
                    A project that is passionately developed by ARISEn's Team so
                    that you can focus on the things that are best for you
                </Typography>
            </PageTitleSection>

            <Grid container spacing={3}>
                {projectInfo.map(project => {
                    return (
                        <ProjectCard
                            key={project.id}
                            projectName={project.name}
                            description={project.description}
                            builtBy={project.builtBy}
                            projectLogo={project.logo}
                            handleClick={() => handleClickOpen(project)}
                        />
                    );
                })}
            </Grid>

            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={currentProject !== null}
            >
                <DialogTitle onClose={handleClose}>
                    {currentProject ? (
                        <Typography variant="h4" component="h1">
                            {currentProject.name}
                        </Typography>
                    ) : null}
                    <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={handleClose}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {currentProject ? (
                        <>
                            <DialogContentText>
                                <Typography gutterBottom>
                                    {currentProject.description}
                                </Typography>
                            </DialogContentText>
                            {currentProject.platform === "mobile" ? (
                                <>
                                    <Typography>Download Here</Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        style={{ marginRight: 10 }}
                                        startIcon={<AppleIcon />}
                                    >
                                        App Store
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<AndroidIcon />}
                                    >
                                        Google Play Store
                                    </Button>
                                </>
                            ) : null}
                        </>
                    ) : null}
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export async function getStaticProps() {
    return { props: { projectInfo } };
}

export default Projects;
