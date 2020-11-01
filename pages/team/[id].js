import React from "react";
import Head from "next/head";
import { Typography, Paper, Grid, Divider } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LanguageIcon from "@material-ui/icons/Language";
import { makeStyles } from "@material-ui/core/styles";

import Loading from "../../components/utilities/loading";
import ClusterBadge from "../../components/Team/cluster-badge";
import MultiBadges from "../../components/utilities/multi-badges";

import WP from "../../utils/wordpress";
import { frontendURL } from "../../utils/constants";

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

const Profile = ({ info, position }) => {
    const classes = useStyles();
    let display;

    return (
        <div className={classes.profileContainer}>
            <div style={{ height: 150 }} />
            {info ? (
                <>
                    <Head>
                        <title>{info.acf.id} - ARISEn Team</title>
                        <meta
                            name="description"
                            content={`${info.acf.full_name} of ARISEn Labs`}
                        />
                        <meta property="og:title" content={info.acf.id} />
                        <meta property="og:type" content="Team Profile" />
                        <meta
                            property="og:image"
                            content={`${info.acf.profile_picture}`}
                        />
                        <meta
                            name="twitter:image"
                            content={`${info.acf.profile_picture}`}
                        />
                        <meta
                            property="og:url"
                            content={`${frontendURL}/team/${info.slug}`}
                        />
                        <meta
                            property="og:description"
                            content={`${info.acf.full_name} of ARISEn Labs`}
                        />
                    </Head>
                    <Paper elevation={3}>
                        <Grid
                            container
                            spacing={2}
                            alignItems="center"
                            className={classes.profileGrid}
                        >
                            <Grid item md={4} align="center">
                                {
                                    <img
                                        src={info.acf.profile_picture}
                                        className={classes.profilePic}
                                    />
                                }
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant="h4" component="h1">
                                    {info.acf.full_name}
                                </Typography>

                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h4"
                                >
                                    {position}
                                </Typography>

                                <Typography variant="subtitle1" component="h3">
                                    Cluster
                                </Typography>
                                {<ClusterBadge cluster={info.acf.cluster} />}

                                <Typography variant="subtitle1" component="h3">
                                    Profession/s
                                </Typography>
                                {<MultiBadges infos={info.acf.roles} />}
                                <div className={classes.accounts}>
                                    {info.acf.github_link !== "" ? (
                                        <GitHubIcon
                                            fontSize="large"
                                            style={{
                                                marginRight: 10,
                                                color: "#24292e",
                                            }}
                                        />
                                    ) : null}
                                    {info.acf.linkedin_link !== "" ? (
                                        <LinkedInIcon
                                            fontSize="large"
                                            style={{
                                                marginRight: 10,
                                                color: "#2867B2",
                                            }}
                                        />
                                    ) : null}
                                    {info.acf.website_link !== "" ? (
                                        <LanguageIcon
                                            fontSize="large"
                                            style={{
                                                marginRight: 10,
                                                color: "#62a12b",
                                            }}
                                        />
                                    ) : null}
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Grid container style={{ marginTop: 25 }}>
                        <Grid item>
                            <Typography
                                variant="body1"
                                component="p"
                                dangerouslySetInnerHTML={{
                                    __html: info.acf.biography,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Divider style={{ marginTop: 10 }} />

                    <Grid container style={{ marginTop: 15 }}>
                        <Grid item>
                            <div className={classes.infoContainer}>
                                <CalendarTodayIcon />
                                <>&nbsp;&nbsp;</>
                                <Typography>
                                    Member since {info.acf.year_joined}
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export async function getStaticPaths() {
    let directorInfo, facultyInfo, studentInfo;
    let data = [];

    try {
        [directorInfo, facultyInfo, studentInfo] = await Promise.all([
            WP.arisenDirector().slug(ctx.params.id),
            WP.arisenFaculty().slug(ctx.params.id),
            WP.arisenStudents().slug(ctx.params.id),
        ]);
        data = directorInfo.concat(facultyInfo);
        data = data.concat(studentInfo);
    } catch (err) {
        data = [];
    }

    const paths = data.map(profile => ({
        params: { id: profile.id },
    }));

    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps(ctx) {
    let directorInfo, facultyInfo, studentInfo;
    let data = [];

    try {
        [directorInfo, facultyInfo, studentInfo] = await Promise.all([
            WP.arisenDirector().slug(ctx.params.id),
            WP.arisenFaculty().slug(ctx.params.id),
            WP.arisenStudents().slug(ctx.params.id),
        ]);

        data = directorInfo.concat(facultyInfo);
        data = data.concat(studentInfo);
    } catch (err) {
        return { props: { info: [], position: "" }, revalidate: 10 };
    }

    let position;

    if (directorInfo.length > 0) position = "Director";
    else if (facultyInfo.length > 0) position = "Faculty";
    else if (studentInfo.length > 0) position = "Student";

    if (data.length > 0)
        return { props: { info: data[0], position: position }, revalidate: 10 };

    return { props: { info: [], position: "" }, revalidate: 10 };
}

export default Profile;
