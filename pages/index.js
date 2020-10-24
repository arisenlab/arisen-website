import { makeStyles } from "@material-ui/core/styles";
import dynamic from "next/dynamic";

const ArisenBanner = dynamic(() => import("../components/Home/arisen-banner"));
const ArisenFacts = dynamic(() => import("../components/Home/arisen-facts"));
const ArisenProjects = dynamic(() =>
    import("../components/Home/arisen-projects")
);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: "auto",
        width: "80%",
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ height: 150 }} />

            <ArisenBanner />

            <div style={{ height: 50 }} />

            <ArisenFacts />

            <div style={{ height: 50 }} />

            <ArisenProjects />
        </div>
    );
}
