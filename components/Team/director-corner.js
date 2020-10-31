import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//import directorInfo from "../../data/team_director";
import TeamCard from "./team-card-item";
import SectionHeader from "./section-header";

const DirectorCorner = ({ directorInfo: director }) => {
    return (
        <div>
            <Grid container spacing={2}>
                <SectionHeader
                    title="DIRECTOR"
                    subtitle="Head of ARISEn Labs"
                    description="The director will monitor the projects of the research
                    laboratory and certify the deployment and release of the
                    developed systems. The director should also ensure the
                    documentation of the projects, such as contracts and
                    manuals. The director shall facilitate the submissions of
                    the research laboratory to the University Research Council."
                />

                <TeamCard
                    id={director[0].acf.id}
                    profile={director[0].acf.profile_picture}
                    fullname={director[0].acf.full_name}
                    cluster={director[0].acf.cluster}
                    roles={director[0].acf.roles}
                    yearJoined={director[0].acf.year_joined}
                />
            </Grid>
        </div>
    );
};

export default DirectorCorner;
