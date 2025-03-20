export const SITE = {
  website: "https://blog.matthewbracke.com/", // replace this with your deployed domain
  author: "Matthew Bracke",
  profile: "https://matthewbracke.com/",
  desc: "A collection of thoughts and ideas by Matthew Bracke.",
  title: "Tales from the Cosmos",
  ogImage: "cosmos.webp",
  lightAndDarkMode: true,
  postPerIndex: 6,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/Mattymoo007/astro-blog/tree/main/src/data/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
  dynamicOgImage: true,
} as const;
