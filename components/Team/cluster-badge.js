import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const ClusterBadge = ({ cluster }) => {
    var clusterColor = "#761e85";
    var textColor = "#ffffff";

    switch (cluster) {
        case "ACC":
            clusterColor = "#f2c206";
            textColor = "#000000";
            break;
        case "BM":
            clusterColor = "#0a4f9d";
            textColor = "#ffffff";
            break;
        case "CS":
            clusterColor = "#761e85";
            textColor = "#ffffff";
            break;
        case "HUMLET":
            clusterColor = "#4f070a";
            textColor = "#ffffff";
            break;
        case "NSM":
            clusterColor = "#1f4c18";
            textColor = "#ffffff";
            break;
        case "SOE":
            clusterColor = "#91948f";
            textColor = "#ffffff";
            break;
        case "SEA":
            clusterColor = "#e16c25";
            textColor = "#ffffff";
            break;
        case "SON":
            clusterColor = "#ffffff";
            textColor = "#000000";
            break;
        case "SS":
            clusterColor = "#f52f64";
            textColor = "#ffffff";
            break;
    }

    return (
        <div>
            <Paper
                style={{
                    backgroundColor: clusterColor,
                    color: textColor,
                    borderRadius: 15,
                    width: "30%",
                    textAlign: "center",
                }}
            >
                <Typography variant="h6">{cluster}</Typography>
            </Paper>
        </div>
    );
};

export default ClusterBadge;
