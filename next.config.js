const WP = require("./utils/wordpress");

const cleanURL = url => {
    return url.replace(/^.*\/\/[^\/]+\/index.php\//, "");
};

module.exports = {
    // Make sure that your node enviroment supports async/await
    exportPathMap: async function (defaultPathMap) {
        let path = {
            "/": { page: "/" },
            "/about": { page: "/about" },
            "/team": { page: "/team" },
            "/projects": { page: "/projects" },
            "/blogs": { page: "/blogs" },
            "/join-us": { page: "/join-us" },
        };

        let posts = await WP.posts();
        posts.map(post => {
            path[`/blogs/${post.slug}`] = {
                page: "/blogs",
                query: { slug: cleanURL(post.link) },
            };
        });

        let [director, faculty, students] = await Promise.all([
            WP.arisenDirector(),
            WP.arisenFaculty(),
            WP.arisenStudents(),
        ]);

        let data = director.concat(faculty);
        data = data.concat(students);

        data.map(info => {
            path[`/team/${info.slug}`] = {
                page: "/team",
                query: { slug: cleanURL(info.slug) },
            };
        });
        return path;
    },
};
