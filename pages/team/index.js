import { makeStyles } from "@material-ui/core/styles";

import dynamic from "next/dynamic";

const PageTitleSection = dynamic(() =>
    import("../../components/utilities/page-title-section")
);
const DirectorCorner = dynamic(() =>
    import("../../components/Team/director-corner")
);
const FacultyCorner = dynamic(() =>
    import("../../components/Team/faculty-corner")
);
const StudentCorner = dynamic(() =>
    import("../../components/Team/student-corner")
);

import directorInfos from "../../data/team_director";
import facultyInfos from "../../data/team_faculty";
import studentInfos from "../../data/team_students";

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
                src="/Team/mindanao_design.png"
                className={classes.mindanaoStyle}
            />
            <div style={{ height: 150 }} />

            <PageTitleSection
                logoURL="/Team/team-logo.png"
                title="Team"
                subtitle="The people behind the projects"
            />

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
    return {
        props: { directorInfos, facultyInfos, studentInfos },
    };
}

export default Team;
