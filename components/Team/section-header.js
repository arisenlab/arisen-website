import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const SectionHeader = ({ title, subtitle, description }) => {
    return (
        <>
            <Grid item xs={12} md={8}>
                <Typography variant="h4">{title}</Typography>
                <Typography gutterBottom variant="h6">
                    {subtitle}
                </Typography>
                <Typography variant="body1">{description}</Typography>
            </Grid>

            <Grid item md={4} />
        </>
    );
};

export default SectionHeader;
