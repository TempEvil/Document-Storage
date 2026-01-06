export const DocumentList: DocumentItem[] = [
  {
    id: 1,
    section: "Maven",
    name: "How to Build a .war File for a React.js Project",
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
  {
    id: 3,
    section: "i18next",
    name: "How to Set Up react-i18next and i18next in a React.js Project",
    steps: [
      {
        text: "Install these packages",
        code: {
          language: "json",
          value: `yarn add i18next react-i18next`,
        },
      },
      {
        text: "Create a languages folder inside the assets folder, then create two files inside it: en.json and kh.json or desire language",
        highlights: ["languages", "assets", "en.json", "kh.json"],
        code: {
          language: "json",
          value: `en.json
{
  "translation": {
    "home": "HOME"
  }
}\n
kh.json
{
  "translation": {
    "home": "ទំព័រដើម"
  }
}\n
`,
        },
      },
      {
        text: "Create a file named i18next.tsx inside the src folder and paste the following code into it",
        highlights: ["i18next.tsx", "src"],
        code: {
          language: "json",
          value: `import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import kh from "@/assets/languages/kh.json";
import en from "@/assets/languages/en.json";

// Get the saved language from localStorage, fallback to 'en'
const savedLanguage = localStorage.getItem("language") || "en";

i18next.use(initReactI18next).init({
  resources: { 
    kh: { translation: kh.translation }, 
    en: { translation: en.translation } 
  },
  lng: savedLanguage, // Use the saved language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18next;`,
        },
      },
      {
        text: "Open src/App.tsx and paste the following code",
        highlights: ["src/App.tsx"],
        code: {
          language: "json",
          value: `import { useEffect } from "react";
import { changeLanguage } from "i18next";
import "@/i18next";

function App() {
  useEffect(() => {
    const setDefault = (key: string, value: string) => {
      if (localStorage.getItem(key) === null) localStorage.setItem(key, value);
    };

    setDefault("language", "en");

    const lng = localStorage.getItem("language") || "en";
    changeLanguage(lng);
  }, []);

  return <div>Hello World</div>;
}

export default App;
`,
        },
      },
      {
        text: "You've set the initial language, now you need a UI switch/toggle that",
      },
    ],
  },
];
