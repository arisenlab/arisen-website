import { useRouter } from "next/router";
import Head from "next/head";
import DefaultErrorPage from "next/error";

import { frontendURL, mediaURL } from "../utils/constants";

import {
    Grid,
    Typography,
    Card,
    CardActionArea,
    CardContent,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Loading from "../../components/utilities/loading";

import WP from "../../utils/wordpress";
import WPGBlocks from "react-gutenberg";

const useStyles = makeStyles(theme => ({
    blogContainer: {
        margin: "auto",
        width: "50%",
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
    return url.replace(/^.*\/\/[^\/]+\/index.php/, "");
};

const Blog = props => {
    const { post, author, authors, recent: recentBlogs } = props;
    const classes = useStyles();
    const router = useRouter();

    const getAuthor = id => {
        return authors.find(author => author.id === id);
    };

    //loading
    if (router.isFallback) {
        return (
            <div className={classes.blogContainer}>
                <div style={{ height: 150 }} />
                <Loading />
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
            <Head>
                <title>{post.title.rendered} - ARISEn Blogs</title>
                <meta
                    name="description"
                    content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
                />
                <meta name="twitter:card" value="summary" />
                <meta property="og:title" content={post.title.rendered} />
                <meta property="og:type" content="blog" />
                <meta
                    property="og:image"
                    content={`${mediaURL}/2020/11/arisen-seo-image.jpg`}
                />
                <meta
                    name="twitter:image"
                    content={`${mediaURL}/2020/11/arisen-seo-image.jpg`}
                />
                <meta
                    property="og:url"
                    content={`${frontendURL}/blogs/${post.slug}`}
                />
                <meta
                    property="og:description"
                    content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
                />
            </Head>
            <div style={{ height: 150 }} />
            <Grid container direction="row" spacing={4}>
                <Grid item>
                    <Typography
                        variant="h3"
                        component="h4"
                        style={{ marginBottom: 10 }}
                    >
                        {post.title.rendered !== ""
                            ? post.title.rendered
                            : "Unknown Title"}
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
                                </>
                            ) : (
                                <b>Unknown</b>
                            )}
                        </div>
                    </Typography>

                    <Typography variant="body1" component="div">
                        <WPGBlocks blocks={post.blocks} />
                    </Typography>
                </Grid>
            </Grid>

            <div style={{ height: 10 }} />
            <Typography gutterBottom variant="h5" component="h4">
                You may also like
            </Typography>

            <Grid container direction="row" spacing={3}>
                {recentBlogs.map(recentBlog => {
                    let author = getAuthor(recentBlog.author);
                    {
                        console.log(cleanURL(recentBlog.link));
                    }

                    return (
                        <Grid item xs={12} md={4} key={recentBlog.id}>
                            <Card className={classes.root}>
                                <CardActionArea
                                    onClick={() =>
                                        router.push(
                                            `/blogs${cleanURL(recentBlog.link)}`
                                        )
                                    }
                                >
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h6"
                                        >
                                            {recentBlog.title.rendered !== ""
                                                ? recentBlog.title.rendered
                                                : "Unknown Title"}
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
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
        const [author, authors, recent] = await Promise.all([
            WP.users().id(res[0].author),
            WP.users(),
            WP.posts().exclude(res[0].id).perPage(3).page(1),
        ]);

        return {
            props: { post: res[0], author, authors, recent },
            revalidate: 10,
        };
    }
    return {
        props: {
            post: null,
            author: null,
            authors: null,
            recent: [],
        },
        revalidate: 10,
    };
};

export default Blog;
