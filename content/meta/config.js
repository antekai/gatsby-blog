const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Andreas Teneketzoglou | Front end development", // <title>
  shortSiteTitle: "AndreTe | Front end development", // <title> ending for posts and pages
  siteDescription:
    "Demos, projects and articles about web development by Andreas Teneketzoglou",
  siteUrl: "https://andrete.eu/",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Andreas Teneketzoglou",
  authorTwitterAccount: "antekaiw",
  // info
  infoTitle: "AndreTe",
  infoTitleNote: "Andreas Teneketzoglou",
  // manifest.json
  manifestName: "AndreTe | Front end development",
  manifestShortName: "AndreTe|FED", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "info@andrete.eu",
  // social
  authorSocialLinks: [
    {
      name: "github",
      url: "https://github.com/antekai"
    },
    // {
    //   name: "twitter",
    //   url: "https://twitter.com/antekaiw"
    // },
    // {
    //   name: "facebook",
    //   url: "http://facebook.com/antekaiw"
    // },
    {
      name: "linkedin",
      url: "https://linkedin.com/in/andreasten"
    },
    {
      name: "codepen",
      url: "https://codepen.io/antekai/"
    }
  ]
};
