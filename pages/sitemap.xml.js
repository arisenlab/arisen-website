/**
 *
 * Sitemap generator for scraping bots from search engines such as Google
 *
 */

import WP from "../utils/wordpress";
import routes from "../navigation/routes";
import { frontendURL } from "../utils/constants";

const createSitemap = (posts, team) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
        .map(page => {
            return `
            <url>
                <loc>${`${frontendURL}${page.pageURL}`}</loc>
            </url>
        `;
        })
        .join("")}
    ${team
        .map(({ slug }) => {
            return `
            <url>
                <loc>${`${frontendURL}/blogs/${slug}`}</loc>
            </url>
        `;
        })
        .join("")}  
    ${posts
        .map(({ slug }) => {
            return `
            <url>
                <loc>${`${frontendURL}/blogs/${slug}`}</loc>
            </url>
        `;
        })
        .join("")}
  </urlset>
`;

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
    let posts = [];
    let team = [];
    try {
        posts = await WP.posts();
        let [directorData, facultyData, studentData] = await Promise.all([
            WP.arisenDirector(),
            WP.arisenFaculty(),
            WP.arisenStudents(),
        ]);
        team = directorData.concat(facultyData);
        team = team.concat(studentData);
    } catch (err) {
        posts = [];
        team = [];
    }
    res.setHeader("Content-Type", "text/xml");
    res.write(createSitemap(posts, team));
    res.end();

    return { props: {} };
}

export default Sitemap;
