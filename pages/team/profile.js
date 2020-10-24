import React from "react";
import { Typography, Paper, Grid, Divider } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/core/styles";

import ClusterBadge from "../../components/Team/cluster-badge";
import MultiBadges from "../../components/utilities/multi-badges";

const useStyles = makeStyles(theme => ({
    profileContainer: {
        width: "50%",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            width: "80%",
        },
    },
    profilePic: {
        width: "90%",
        borderRadius: 5,
    },
    profileGrid: {
        padding: 10,
    },
    infoContainer: {
        display: "flex",
        wrap: "wrap",
    },
    accounts: {
        display: "flex",
        wrap: "wrap",
        marginTop: 15,
    },
}));

const Profile = () => {
    const classes = useStyles();

    return (
        <div className={classes.profileContainer}>
            <div style={{ height: 150 }} />

            <Paper elevation={3}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    className={classes.profileGrid}
                >
                    <Grid item md={4} align="center">
                        <img
                            src="/Team/director-rvwlumapas.jpg"
                            className={classes.profilePic}
                        />
                    </Grid>
                    <Grid item md={8}>
                        <Typography variant="h4" component="h1">
                            Raul Vincent Lumapas
                        </Typography>

                        <Typography gutterBottom variant="h6" component="h4">
                            Director
                        </Typography>

                        <Typography variant="subtitle1" component="h3">
                            Cluster
                        </Typography>
                        <ClusterBadge cluster="CS" />

                        <Typography variant="subtitle1" component="h3">
                            Profession/s
                        </Typography>
                        <MultiBadges
                            infos={[
                                "Project Manager",
                                "Programmer",
                                "Prince Charming",
                            ]}
                        />
                        <div className={classes.accounts}>
                            <GitHubIcon
                                fontSize="large"
                                style={{
                                    marginRight: 10,
                                    color: "#24292e",
                                }}
                            />
                            <LinkedInIcon
                                fontSize="large"
                                style={{
                                    marginRight: 10,
                                    color: "#2867B2",
                                }}
                            />
                            <LanguageIcon
                                fontSize="large"
                                style={{ marginRight: 10, color: "#62a12b" }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </Paper>

            <Grid container style={{ marginTop: 25 }}>
                <Grid item>
                    <Typography variant="body2" component="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum
                    </Typography>
                </Grid>
            </Grid>

            <Divider style={{ marginTop: 10 }} />

            <Grid container style={{ marginTop: 15 }}>
                <Grid item>
                    <div className={classes.infoContainer}>
                        <SchoolIcon />
                        <>&nbsp;&nbsp;</>
                        <Typography>Studies Information Technology</Typography>
                    </div>
                    <div
                        className={classes.infoContainer}
                        style={{ marginTop: 10 }}
                    >
                        <CalendarTodayIcon />
                        <>&nbsp;&nbsp;</>
                        <Typography>Member since 2020</Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Profile;
