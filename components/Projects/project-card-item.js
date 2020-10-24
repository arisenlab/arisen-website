import {
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    CardMedia,
} from "@material-ui/core";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

import MultiBadges from "../utilities/multi-badges";

const useStyles = makeStyles(theme => ({
    cardRoot: {
        minWidth: 275,
        borderRadius: 20,
    },
    cardButton: {
        display: "flex",
        justifyContent: "center",
    },
}));
const ProjectCard = ({
    projectName,
    description,
    builtBy,
    projectLogo,
    handleClick,
}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={4}>
            <Card className={classes.cardRoot} variant="outlined">
                <CardMedia
                    component="img"
                    alt={projectName}
                    height="250"
                    image={projectLogo}
                    title={projectName}
                />
                <CardContent>
                    <Typography variant="h5" component="h1">
                        {projectName}
                    </Typography>
                    <MultiBadges infos={builtBy} />
                    <div style={{ height: 10 }} />
                    <Typography variant="body1">
                        {description.substring(0, 151)}
                    </Typography>
                </CardContent>
                <CardActions className={classes.cardButton}>
                    <Button
                        variant="contained"
                        color="primary"
                        disableElevation
                        endIcon={
                            <SvgIcon>
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                            </SvgIcon>
                        }
                        onClick={handleClick}
                    >
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ProjectCard;
