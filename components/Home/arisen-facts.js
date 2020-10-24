import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    factsContainer: {
        display: "flex",
        flexWrap: "wrap",
    },
    factsItemContainer: {
        padding: theme.spacing(2),
        borderRadius: "20px",
    },
}));

const variant = "h5";
const component = "h5";

const facts = [
    { factText: "4 Faculty members", backgroundColor: "#454545" },
    { factText: "2 Projects Developed", backgroundColor: "#B028BC" },
    { factText: "3 Student members", backgroundColor: "#FF5F5F" },
];

const ArisenFacts = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4">Facts</Typography>

            <div style={{ height: 20 }} />

            <div className={classes.factsContainer}>
                <Grid container spacing={3} direction="row" alignItems="center">
                    {facts.map(fact => {
                        return (
                            <Grid
                                item
                                align="center"
                                xs={12}
                                md={4}
                                key={fact.factText}
                            >
                                <Paper
                                    elevation={3}
                                    align="center"
                                    className={classes.factsItemContainer}
                                    style={{
                                        backgroundColor: fact.backgroundColor,
                                        color: "#fff",
                                    }}
                                >
                                    <Typography
                                        variant={variant}
                                        component={component}
                                    >
                                        {fact.factText}
                                    </Typography>
                                </Paper>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </div>
    );
};

export default ArisenFacts;
