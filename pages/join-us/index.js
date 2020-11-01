import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import dynamic from "next/dynamic";

import { mediaURL } from "../../utils/constants";

const PageTitleSection = dynamic(() =>
    import("../../components/utilities/templates").then(
        template => template.PageTitle
    )
);

const useStyles = makeStyles(theme => ({
    joinUsContainer: {
        margin: "auto",
        width: "80%",
    },
    rolesContainer: {
        padding: "20px",
        borderRadius: "20px",
    },
    applicationContainer: {
        borderRadius: "20px",
        padding: "20px",
        width: "80%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
}));

const JoinUs = () => {
    const classes = useStyles();

    return (
        <div className={classes.joinUsContainer}>
            <div style={{ height: 150 }} />

            <PageTitleSection logoURL={`${mediaURL}/2020/11/joinus-logo.png`}>
                <Typography variant="h3">Join Us</Typography>

                <Typography variant="h5" gutterBottom>
                    Improve your skills through solving real world problems
                </Typography>

                <Typography variant="body1">
                    No need to be shy, be yourself and help us build ARISEn
                    more.
                </Typography>
            </PageTitleSection>

            <Typography variant="h4">Open Roles</Typography>

            <div style={{ height: 20 }} />

            <Grid container spacing={3} alignItems="center">
                <Grid item md={6}>
                    <Paper className={classes.rolesContainer} elevation={3}>
                        <Typography gutterBottom={true} variant="h5">
                            Designers
                        </Typography>
                        <Typography
                            gutterBottom={true}
                            style={{ marginBottom: "15px" }}
                        >
                            Experience showing your ideas through design to make
                            the system appealing to the user. Not just appealing
                            but easy to use as well. You will be trained both
                            User Interface and User Experience.
                        </Typography>
                        <Typography>
                            Types of things you will learn or be using:
                        </Typography>
                        <ul>
                            <li>Figma, Adobe Illustrator, etc.</li>
                            <li>Photoshop (any software)</li>
                            <li>Any Desginer Tools</li>
                        </ul>
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Paper className={classes.rolesContainer} elevation={3}>
                        <Typography gutterBottom={true} variant="h5">
                            Developer
                        </Typography>
                        <Typography
                            gutterBottom={true}
                            style={{ marginBottom: "15px" }}
                        >
                            Thinking of a solution is one of essentials why this
                            Lab exist. Come and be part of problem solvers and
                            build system that answers the needs of the people.
                            Your solution matters to us.
                        </Typography>
                        <Typography>
                            Types of things you will learn or be using:
                        </Typography>
                        <ul>
                            <li>Server-side Web (PHP, Node, Django, etc.)</li>
                            <li>Database (SQL, Firebase, etc.)</li>
                            <li>Android and iOS Development</li>
                        </ul>
                    </Paper>
                </Grid>
            </Grid>

            <div style={{ height: 30 }} />

            <Grid container spacing={2} direction="row">
                <Grid item md={12}>
                    <Typography variant="h4">Application Process</Typography>
                    <Typography variant="h6">
                        <ol>
                            <li>
                                Click the button below to access the Google
                                Forms.
                            </li>
                            <li>
                                Answer the provided information. Always remember
                                be Honest :)
                            </li>
                            <li>Wait for our announcements/email</li>
                        </ol>
                    </Typography>
                </Grid>
            </Grid>

            <div style={{ height: 30 }} />

            <Grid container spacing={2} direction="row" alignItems="center">
                <Grid item md={12} align="center">
                    <Paper
                        className={classes.applicationContainer}
                        elevation={3}
                    >
                        <Typography gutterBottom={true} variant="h5">
                            We are waiting for you. Click the button below to
                            apply.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            style={{ width: "100%" }}
                            onClick={() =>
                                window.open("http://bit.ly/ApplytoARISEn")
                            }
                        >
                            Apply to ARISEn
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default JoinUs;
