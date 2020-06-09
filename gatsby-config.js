module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
         social: {
          // Usernames
          twitter: `ichristiandavid`,
          gitHub: `christiandavid`,
          stackOverflow: `967956/christian-david`,
          linkedIn: `in/christianibarguen/`,
          resumeInPdf: `/CV-19.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hi!, I'm Varun Raval`,
          h2Text: `I'm a Front End Developer based in Toronto, ON.`,
          typewriter: [
            `I am currenlty building my portfolio 🚧`,
            `Check back soon 🔜`,            
          ],
        },
      },
    },
  ],
}