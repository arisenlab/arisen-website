import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

import { useRouter } from "next/router";
import routes from "./routes";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
});

export default function TemporaryDrawer({ onChosen }) {
    const router = useRouter();
    const classes = useStyles();

    const navigateClick = href => {
        router.push(href);
        onChosen();
    };

    return (
        <div className={classes.list}>
            <List
                component="nav"
                aria-labelledby="list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="list-subheader"
                        style={{ marginTop: 15 }}
                    >
                        <Typography variant="h5" color="secondary">
                            ARISEN
                        </Typography>
                    </ListSubheader>
                }
                className={classes.root}
            >
                {routes.map(link => (
                    <ListItem
                        button
                        key={link.linkName}
                        onClick={() => navigateClick(link.pageURL)}
                    >
                        <ListItemText
                            primary={
                                <Typography variant="h6">
                                    {link.linkName}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
