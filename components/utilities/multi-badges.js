import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    rolesContainer: {
        display: "flex",
        flexWrap: "wrap",
    },
}));

const InfoBadge = ({ infos }) => {
    const classes = useStyles();

    return (
        <div className={classes.rolesContainer}>
            {infos.map((info, index) => {
                return (
                    <Paper
                        style={{
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingLeft: 10,
                            paddingRight: 10,
                            marginTop: 5,
                            marginRight: 7,
                            borderRadius: 15,
                            textAlign: "center",
                            backgroundColor: "#e7ecff",
                            color: "#3E3E3E",
                        }}
                        key={index}
                    >
                        <Typography variant="subtitle2">{info}</Typography>
                    </Paper>
                );
            })}
        </div>
    );
};

export default InfoBadge;
