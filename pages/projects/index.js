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

import WP from "../../utils/wordpress";
import { mediaURL } from "../../utils/constants";
import Loading from "../../components/utilities/loading";

import dynamic from "next/dynamic";
const PageTitleSection = dynamic(
    () =>
        import("../../components/utilities/templates").then(
            template => template.PageTitle
        ),
    { loading: () => <Loading /> }
);

const ProjectCard = dynamic(
    () => import("../../components/Projects/project-card-item"),
    { loading: () => <Loading /> }
);

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

const platformOutput = platform => {
    if (platform.toLowerCase() === "mobile") {
        return (
            <>
                <Typography>Download Here</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: 10 }}
                    startIcon={<AppleIcon />}
                    onClick={() =>
                        window.open(currentProject.acf.app_store_link)
                    }
                >
                    App Store
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AndroidIcon />}
                    onClick={() =>
                        window.open(currentProject.acf.play_store_link)
                    }
                >
                    Google Play Store
                </Button>
            </>
        );
    }

    if (platform.toLowerCase() === "website") {
        return (
            <>
                <Typography>Website Link Here</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: 10 }}
                    startIcon={<AppleIcon />}
                    onClick={() => window.open(currentProject.acf.website_link)}
                >
                    Website Link
                </Button>
            </>
        );
    }
};

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

            <PageTitleSection logoURL={`${mediaURL}/2020/11/projects-logo.png`}>
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
                            projectName={project.acf.project_name}
                            description={project.acf.description}
                            builtBy={project.acf.built_by.split(",")}
                            projectLogo={project.acf.logo}
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
                <DialogTitle onClose={handleClose} disableTypography>
                    {currentProject ? (
                        <Typography variant="h4" component="h4">
                            {currentProject.acf.project_name}
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
                            <Typography
                                gutterBottom
                                dangerouslySetInnerHTML={{
                                    __html: currentProject.acf.description,
                                }}
                            />
                            {currentProject.acf.platform.map(platform => {
                                return platformOutput(platform);
                            })}
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
    let projectInfo = [];

    try {
        projectInfo = await WP.arisenProjects();
    } catch {
        projectInfo = [];
    }

    return { props: { projectInfo } };
}

export default Projects;
