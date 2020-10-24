import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import studentInfo from "../../data/team_students";
import TeamCard from "./team-card-item";
import SectionHeader from "./section-header";

const StudentCorner = ({ studentInfos: students }) => {
    return (
        <div>
            <Grid container spacing={2}>
                <SectionHeader
                    title="STUDENTS"
                    subtitle="Apprentices of ARISEn Labs"
                    description="Consist of students from different clusters that forms
                    as a team to think and develop a solution to the
                    problem. Guided by the mentors, they will think of a
                    solution by combining ideas that consist of their
                    specialty. Also, a solution will be converted to
                    technology that can help the lives of the people
                    affected by the problems."
                />

                {students.map(student => {
                    return (
                        <TeamCard
                            profile={student.profilePicture}
                            fullname={student.fullname}
                            cluster={student.cluster}
                            roles={student.roles}
                            yearJoined={student.yearJoined}
                            key={student.id}
                        />
                    );
                })}
            </Grid>
        </div>
    );
};

export default StudentCorner;
