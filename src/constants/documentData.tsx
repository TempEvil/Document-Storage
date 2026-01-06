export const DocumentList: DocumentItem[] = [
  {
    id: 1,
    section: "Maven",
    name: "How to build .war file",
    files: {
      pomXMLFile: "/pom.xml",
      webXMLFile: "/web.xml",
    },
    steps: [
      {
        text: "Download the required configuration files",
        downloads: ["pomXMLFile", "webXMLFile"], // keys from files
      },
      {
        text: "Place the downloaded files in the root directory of your ReactJS project",
        highlights: ["ReactJS"],
      },
      {
        text: "In the pom.xml file, Change the groupId and artifactId to match the SVN repository name",
        highlights: ["pom.xml", "groupId", "artifactId", "SVN"],
        code: {
          language: "json",
          value: `<groupId>\n\tsvn-name\n</groupId>\n\n<artifactId>\n\tsvn-name\n</artifactId>`,
        },
      },
      {
        text: "In the web.xml file, Set the display-name to match the name value from package.json",
        highlights: ["web.xml", "display-name", "package.json"],
        code: {
          language: "json",
          value: `<display-name>\n\tpackage.json-name\n</display-name>`,
        },
      },
      {
        text: "In package.json add script",
        highlights: ["package.json"],
        code: {
          language: "json",
          value: `"scripts": {
  "mvn": "mvnd clean package",
}`,
        },
      },
      {
        text: "Build the frontend",
        highlights: ["yarn run build"],
        code: {
          language: "json",
          value: `yarn run build`,
        },
      },
      {
        text: "Build the WAR file",
        highlights: ["yarn mvn", "WAR file"],
        code: {
          language: "json",
          value: `yarn mvn`,
        },
      },
      {
        text: "Deploy the WAR file: Locate the generated .war file in the target directory ,then send the file for deployment.",
        highlights: [".war", "target", "WAR file"],
      },
    ],
  },
  {
    id: 2,
    section: "GitHub",
    name: "How to Push a Project to an Existing GitHub Repository from the Command Line",
    steps: [
      {
        text: "",
        code: {
          language: "json",
          value: `git init`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `git add .`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `git commit -m "first commit"`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `git remote add origin git remote add origin https://github.com/{github-username}/{repository-name}.git`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `git branch -M main`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `git push -u origin main`,
        },
      },
    ],
  },
];
