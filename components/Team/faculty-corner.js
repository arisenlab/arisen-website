import React from "react";
import Grid from "@material-ui/core/Grid";

import TeamCard from "./team-card-item";
import SectionHeader from "./section-header";

const FacultyCorner = ({ facultyInfo: faculties }) => {
    return (
        <div>
            <Grid container spacing={2}>
                <SectionHeader
                    title="FACULTY"
                    subtitle="Mentors of ARISEn Labs"
                    description="The Faculty will act as a mentor of the students.
                    Responsible for guiding them in research or building a
                    project. In addition, they are the ones who will be
                    proposing projects to the AdDU’s University Research
                    Council (URC). Also, they are responsible for giving
                    feedbacks to the Course Instructor if they student is
                    creddited based on his/her output."
                />

                {faculties.map(faculty => {
                    return (
                        <TeamCard
                            id={faculty.acf.id}
                            profile={faculty.acf.profile_picture}
                            fullname={faculty.acf.full_name}
                            cluster={faculty.acf.cluster}
                            roles={faculty.acf.roles}
                            yearJoined={faculty.acf.year_joined}
                            key={faculty.acf.id}
                        />
                    );
                })}
            </Grid>
        </div>
    );
};

export default FacultyCorner;
