import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import WP from "../../utils/wordpress";
import { mediaURL } from "../../utils/constants";

import dynamic from "next/dynamic";
const PageTitleSection = dynamic(() =>
    import("../../components/utilities/templates").then(
        template => template.PageTitle
    )
);

const BlogCard = dynamic(() => import("../../components/Blog/blog-card-item"));

const useStyles = makeStyles(theme => ({
    blogContainer: {
        margin: "auto",
        width: "80%",
    },
}));

const Blog = ({ posts, users }) => {
    const classes = useStyles();

    const getAuthor = id => {
        return users.find(user => user.id === id);
    };

    return (
        <div className={classes.blogContainer}>
            <div style={{ height: 150 }} />

            <PageTitleSection logoURL={`${mediaURL}/2020/11/blog-logo.png`}>
                <Typography variant="h3">Blog</Typography>

                <Typography variant="h5" gutterBottom>
                    Wanna know our stories? Feel free to read the articles
                </Typography>

                <Typography variant="body1">
                    Feel free to read articles, tips, stories, etc. from our
                    beloved members. Also, you can ask them questions regarding
                    how
                </Typography>
            </PageTitleSection>

            <div>
                <Grid container spacing={2}>
                    {posts.map(post => {
                        return (
                            <BlogCard
                                key={post.id}
                                post={post}
                                author={getAuthor(post.author)}
                            />
                        );
                    })}
                </Grid>
            </div>
        </div>
    );
};

export async function getStaticProps(ctx) {
    try {
        const [res, users] = await Promise.all([
            WP.posts().perPage(50),
            WP.users().perPage(50),
        ]);

        if (res) {
            return { props: { posts: res, users }, revalidate: 10 };
        } else {
            return { props: { posts: [], users }, revalidate: 10 };
        }
    } catch (err) {
        return { props: { posts: [], users: [] }, revalidate: 10 };
    }
}

export default Blog;
