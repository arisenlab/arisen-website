import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import WP from "../utils/wordpress";

import Loading from "../components/utilities/loading";

const ArisenBanner = dynamic(() => import("../components/Home/arisen-banner"), {
    loading: () => <Loading />,
});
const ArisenFacts = dynamic(() => import("../components/Home/arisen-facts"), {
    loading: () => <Loading />,
});
const ArisenProjects = dynamic(
    () => import("../components/Home/arisen-projects"),
    { loading: () => <Loading /> }
);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: "auto",
        width: "80%",
    },
}));

export default function Home({ projectInfo }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ height: 150 }} />

            <ArisenBanner />

            <div style={{ height: 50 }} />

            <ArisenFacts />

            <div style={{ height: 50 }} />

            <ArisenProjects projects={projectInfo} />
        </div>
    );
}

export async function getStaticProps() {
    let projectInfo = [];

    try {
        projectInfo = await WP.arisenProjects();
    } catch {
        projectInfo = [];
    }

    return { props: { projectInfo } };
}
