import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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

const TeamCard = ({ profile, fullname, cluster, roles, yearJoined }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={profile}
                    title="DIRECTOR"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {fullname}
                    </Typography>
                    <ClusterBadge cluster={cluster} />
                    <MultiBadges infos={roles} />
                    <Typography style={{ marginTop: 5 }}>
                        Member since {yearJoined}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default TeamCard;
