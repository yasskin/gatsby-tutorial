
module.exports = {
    siteMetadata: {
        title: `Pandas Eating Lotus`,
    },
    plugins: [
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
}