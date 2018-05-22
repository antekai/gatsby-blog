const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "AndreTe | Dev Blog", // <title>
  shortSiteTitle: "AndreTe | Dev Blog", // <title> ending for posts and pages
  siteDescription:
    "AndreTe | demos, projects and articles about web development. Andreas Teneketzoglou | Front end web developer ",
  siteUrl: "/",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Andreas Teneketzoglou",
  authorTwitterAccount: "antekaiw",
  // info
  infoTitle: "AndreTe",
  infoTitleNote: "Dev Blog",
  // manifest.json
  manifestName: "AndreTe | Dev Blog",
  manifestShortName: "AndreTe|Dev", // max 12 characters
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
