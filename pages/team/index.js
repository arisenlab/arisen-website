import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import WP from "../../utils/wordpress";
import { mediaURL } from "../../utils/constants";

import dynamic from "next/dynamic";

import sort from "fast-sort";

import Loading from "../../components/utilities/loading";

const PageTitleSection = dynamic(
    () =>
        import("../../components/utilities/templates").then(
            template => template.PageTitle
        ),
    { loading: () => <Loading /> }
);
const DirectorCorner = dynamic(
    () => import("../../components/Team/director-corner"),
    { loading: () => <Loading /> }
);
const FacultyCorner = dynamic(
    () => import("../../components/Team/faculty-corner"),
    { loading: () => <Loading /> }
);
const StudentCorner = dynamic(
    () => import("../../components/Team/student-corner"),
    { loading: () => <Loading /> }
);

const useStyles = makeStyles(theme => ({
    teamContainer: {
        margin: "auto",
        width: "80%",
    },
    mindanaoStyle: {
        position: "fixed",
        width: 300,
        left: "75%",
        height: "100%",
        opacity: "20%",
        zIndex: -1,
    },
}));

const Team = ({ directorInfos, facultyInfos, studentInfos }) => {
    const classes = useStyles();

    return (
        <div className={classes.teamContainer}>
            <img
                src={`${mediaURL}/2020/11/mindanao_design.png`}
                className={classes.mindanaoStyle}
            />
            <div style={{ height: 150 }} />

            <PageTitleSection
                logoURL={`${mediaURL}/2020/11/team-logo.png`}
                alt="Team Logo"
            >
                <Typography variant="h3">Team</Typography>

                <Typography variant="h5" gutterBottom>
                    The people behind the projects
                </Typography>

                <Typography variant="body1">
                    The projects build is not possible without these passionate
                    people. We recruit students who is passionate in building
                    solutions towards the problem. Also, the ones who loves to
                    change the world through technology.
                </Typography>
            </PageTitleSection>

            <div style={{ height: 50 }} />

            <DirectorCorner directorInfo={directorInfos} />

            <div style={{ height: 50 }} />

            <FacultyCorner facultyInfo={facultyInfos} />

            <div style={{ height: 50 }} />

            <StudentCorner studentInfos={studentInfos} />
        </div>
    );
};

export async function getStaticProps(ctx) {
    try {
        const [directorInfo, facultyInfo, studentInfo] = await Promise.all([
            WP.arisenDirector(),
            WP.arisenFaculty(),
            WP.arisenStudents(),
        ]);

        if (directorInfo || facultyInfo || studentInfo) {
            sort(facultyInfo).by([
                { asc: faculty => parseInt(faculty.acf.year_joined) },
                { asc: faculty => faculty.acf.full_name },
            ]);

            sort(studentInfo).by([
                { asc: student => parseInt(student.acf.year_joined) },
                { asc: student => student.acf.full_name },
            ]);

            return {
                props: {
                    directorInfos: directorInfo,
                    facultyInfos: facultyInfo,
                    studentInfos: studentInfo,
                },
                revalidate: 10,
            };
        } else
            return {
                props: {
                    directorInfos: [],
                    facultyInfos: [],
                    studentInfos: [],
                },
                revalidate: 10,
            };
    } catch {
        return {
            props: {
                directorInfos: [],
                facultyInfos: [],
                studentInfos: [],
            },
            revalidate: 10,
        };
    }
}

export default Team;
