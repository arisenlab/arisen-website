import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import dynamic from "next/dynamic";

import aboutInfo from "../../data/about";

import Loading from "../../components/utilities/loading";

const AboutTemplate = dynamic(
    () => import("../../components/About/about-template"),
    { loading: () => <Loading /> }
);

const useStyles = makeStyles(theme => ({
    aboutContainer: {
        flexGrow: 1,
        margin: "auto",
        width: "80%",
    },
}));

const About = () => {
    const classes = useStyles();
    let counter = 0;
    return (
        <div className={classes.aboutContainer}>
            <div style={{ height: 150 }} />

            {aboutInfo.map(info => {
                counter++;
                let isAboutLeftTemplate = counter % 2 == 1 ? true : false;
                return (
                    <AboutTemplate
                        imageURL={info.imageURL}
                        title={info.title}
                        subtitle={info.subtitle}
                        description={info.description}
                        useImageLeftTemplate={isAboutLeftTemplate}
                        key={info.title}
                    />
                );
            })}
        </div>
    );
};

export default About;
