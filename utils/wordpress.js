const Wordpress = require("wpapi");
const { backendURL } = require("./constants");

const wp = new Wordpress({ endpoint: `${backendURL}/index.php/wp-json` });

wp.arisenDirector = wp.registerRoute("wp/v2", "/arisen-director/(?P<id>\\d+)");
wp.arisenFaculty = wp.registerRoute("wp/v2", "/arisen-faculty/(?P<id>\\d+)");
wp.arisenStudents = wp.registerRoute("wp/v2", "/arisen-students/(?P<id>\\d+)");
wp.arisenProjects = wp.registerRoute("wp/v2", "/arisen-projects/(?P<id>\\d+)");

module.exports = wp;
