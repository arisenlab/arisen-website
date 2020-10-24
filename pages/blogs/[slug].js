import { useRouter } from "next/router";
import Head from "next/head";
import DefaultErrorPage from "next/error";

import {
    Grid,
    Typography,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    CircularProgress,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import WP from "../../utils/wordpress";
import WPGBlocks from "react-gutenberg";

const useStyles = makeStyles(theme => ({
    blogContainer: {
        margin: "auto",
        width: "60%",
        [theme.breakpoints.down("md")]: {
            width: "90%",
        },
    },
    authorFormat: {
        display: "flex",
        alignItems: "center",
    },
    authorProfile: {
        borderRadius: "10px",
    },
}));

const cleanURL = url => {
    return url.replace(/^.*\/\/[^\/]+/, "");
};

const Blog = props => {
    const { post, authors, recent: recentBlogs } = props;
    const classes = useStyles();
    const router = useRouter();

    const getAuthor = id => {
        return authors.find(author => author.id === id);
    };

    const author = getAuthor(post.author);

    //loading
    if (router.isFallback) {
        return (
            <div className={classes.blogContainer}>
                <Grid container direction="row" align="center">
                    <CircularProgress
                        style={{ marginTop: 100, marginBottom: 100 }}
                    />
                </Grid>
            </div>
        );
    }

    //If no post such exist
    if (!post) {
        return (
            <>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
                <DefaultErrorPage statusCode={404} />
            </>
        );
    }

    return (
        <div className={classes.blogContainer}>
            <div style={{ height: 150 }} />
            <Grid container direction="row" spacing={4}>
                <Grid item>
                    <Typography
                        variant="h3"
                        component="h4"
                        style={{ marginBottom: 10 }}
                    >
                        {post.title.rendered}
                    </Typography>

                    <Typography gutterBottom variant="body1" component="div">
                        <div className={classes.authorFormat}>
                            {author ? (
                                <>
                                    <img
                                        src={author.avatar_urls["24"]}
                                        className={classes.authorProfile}
                                    />
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                    <b>{author.name}</b>
                                    <b>{author.name}</b>
                                </>
                            ) : (
                                <b>Unknown</b>
                            )}
                        </div>
                    </Typography>

                    {post.jetpack_featured_media_url ? (
                        <img
                            src={post.jetpack_featured_media_url}
                            style={{
                                width: "100%",
                                marginTop: 40,
                                marginBottom: 20,
                            }}
                        />
                    ) : null}

                    <Typography variant="body1" component="div">
                        <WPGBlocks blocks={post.blocks} />
                    </Typography>
                </Grid>
            </Grid>

            <div style={{ height: 50 }} />
            <Typography gutterBottom variant="h5" component="h4">
                You may also like
            </Typography>

            <Grid container direction="row" spacing={3}>
                {recentBlogs.map(recentBlog => {
                    let imageURL = "/About/ARISEn.jpg";
                    if (recentBlog.jetpack_featured_media_url !== "")
                        imageURL = jetpack_featured_media_url;

                    let author = getAuthor(recentBlog.author);

                    return (
                        <Grid item xs={12} md={4} key={recentBlog.id}>
                            <Card className={classes.root}>
                                <CardActionArea
                                    onClick={() =>
                                        router.push(cleanURL(recentBlog.link))
                                    }
                                >
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageURL}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h6"
                                        >
                                            {recentBlog.title.rendered}
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle2"
                                        >
                                            {author ? `${author.name}/` : null}
                                            {new Date(
                                                recentBlog.date
                                            ).toDateString()}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

//Static Site Generate every post
export const getStaticPaths = async () => {
    let res = [];

    try {
        res = await WP.posts();
    } catch (err) {
        res = [];
    }

    const paths = res.map(post => ({
        params: { slug: post.slug },
    }));

    return {
        paths,
        fallback: true,
    };
};

//Static Site Generate the current post and know its author and other post aside itself
export const getStaticProps = async ctx => {
    let res = [];
    try {
        res = await WP.posts().slug(ctx.params.slug);
    } catch (err) {
        res = [];
    }

    if (res.length > 0) {
        const [authors, recent] = await Promise.all([
            WP.users(),
            WP.posts().exclude(res[0].id).perPage(3).page(1),
        ]);

        return { props: { post: res[0], authors, recent }, revalidate: 10 };
    }
    return { props: { post: null, authors: null, recent: [] }, revalidate: 10 };
};

export default Blog;
