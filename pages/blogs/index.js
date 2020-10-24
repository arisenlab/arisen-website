import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import WP from "../../utils/wordpress";

import dynamic from "next/dynamic";
const PageTitleSection = dynamic(() =>
    import("../../components/utilities/page-title-section")
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

            <PageTitleSection
                logoURL="/Blog/blog-logo.png"
                title="Blog"
                subtitle="Wanna know our stories? Feel free to read the articles"
            />

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
