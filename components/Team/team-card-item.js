import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";

import ClusterBadge from "./cluster-badge";
import MultiBadges from "../utilities/multi-badges";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 250,
    },
}));

const TeamCard = ({ id, profile, fullname, cluster, roles, yearJoined }) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.root}>
                <CardActionArea onClick={() => router.push(`team/${id}`)}>
                    <CardMedia
                        className={classes.media}
                        image={profile}
                        title="DIRECTOR"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            {fullname}
                        </Typography>
                        <ClusterBadge cluster={cluster} />
                        <MultiBadges infos={roles} />
                        <Typography
                            style={{ marginTop: 10, marginBottom: -10 }}
                        >
                            Member since {yearJoined}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default TeamCard;
