import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { useRouter } from "next/router";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 250,
    },
    authorFormat: {
        display: "flex",
        alignItems: "center",
    },
    authorProfile: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
}));

const cleanURL = url => {
    return url.replace(/^.*\/\/[^\/]+\/index.php/, "blogs");
};

export default function BlogCard({ post, author }) {
    const date = new Date(post.date);

    const classes = useStyles();
    const router = useRouter();

    const [renderedExcerpt, setRenderedExcerpt] = React.useState("");
    const [renderedTitle, setRenderedTitle] = React.useState("");

    React.useEffect(() => {
        if ("rendered" in post.excerpt) {
            setRenderedExcerpt(post.excerpt.rendered);
        }
    }, [post.excerpt]);

    React.useEffect(() => {
        if ("rendered" in post.title) {
            setRenderedTitle(post.title.rendered);
        }
    }, [post.title]);

    return (
        <Grid item xs={12} md={4} align="center">
            <Card className={classes.root} align="left">
                <CardActionArea
                    onClick={() => router.push(cleanURL(post.link))}
                >
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            dangerouslySetInnerHTML={{ __html: renderedTitle }}
                        />
                        {author ? (
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                className={classes.authorFormat}
                                component="div"
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src={author.avatar_urls["24"]}
                                    className={classes.authorProfile}
                                    component="div"
                                />
                                <>&nbsp;</>
                                <>&nbsp;</>
                                <b>{author.name}</b>
                            </Typography>
                        ) : null}
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            component="p"
                            dangerouslySetInnerHTML={{
                                __html: renderedExcerpt,
                            }}
                        />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
