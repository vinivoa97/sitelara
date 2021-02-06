require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["article", "category", "writer", "card-Professors",
                       "card-alunos", "publicacoes", "cursos", "experimentos"],
        singleTypes: [`homepage`, `global`, `quem-somos-page`,
                      `cursos-page`, `laboratorios-page`, `publicacoes-page`, `blog-page`],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ], // Add or remove icon sizes as desired
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
          custom: {
          families: ["Roboto, Regular"],
          urls: ["/fonts/fonts.css"],
          },
      },
  },
  {
    resolve: "gatsby-plugin-google-fonts",
    options: {
        fonts: [
            "Roboto:300" 
        ], display: "swap"       
    }
  },
    
  ],
};


//"gatsby-plugin-offline",