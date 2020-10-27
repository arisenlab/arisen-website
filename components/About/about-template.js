import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { ParagraphWithPicture } from "../utilities/templates";

const AboutTemplate = ({
    imageURL,
    title,
    subtitle,
    description,
    useImageLeftTemplate,
}) => {
    return (
        <div>
            <Grid container spacing={2} alignItems="center">
                {useImageLeftTemplate ? (
                    <>
                        <ParagraphWithPicture imageURL={imageURL}>
                            <Typography variant="h3">{title}</Typography>
                            <Typography gutterBottom variant="h5">
                                {subtitle}
                            </Typography>
                            <Typography variant="body1">
                                {description}
                            </Typography>
                        </ParagraphWithPicture>
                    </>
                ) : (
                    <>
                        <ParagraphWithPicture imageURL={imageURL} alter={true}>
                            <Typography variant="h3">{title}</Typography>
                            <Typography gutterBottom variant="h5">
                                {subtitle}
                            </Typography>
                            <Typography variant="body1">
                                {description}
                            </Typography>
                        </ParagraphWithPicture>
                    </>
                )}
            </Grid>
            <div style={{ height: 50 }} />
        </div>
    );
};

export default AboutTemplate;
