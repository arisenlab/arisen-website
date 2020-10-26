module.exports = {
    // Make sure that your node enviroment supports async/await
    exportPathMap: async function (defaultPathMap) {
        const path = {
            "/": {
                page: "/",
            },
            "/about": {
                page: "/about",
            },
            "/team": {
                page: "/team",
            },
            "/projects": {
                page: "/projects",
            },
            "/blogs": {
                page: "/blogs",
            },
        };

        return path;
    },
};
