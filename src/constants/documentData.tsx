export const DocumentList: DocumentItem[] = [
  //! 01
  {
    id: 1,
    section: "Maven",
    name: "How to Build a .war file for a React.js Project (TypeScript) - [tomcat]",
    files: {
      PomXMLFile: "/pom.xml",
      WebXMLFile: "/web.xml",
    },
    steps: [
      {
        text: "Download the required configuration files",
        downloads: ["PomXMLFile", "WebXMLFile"], // keys from files
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
          value: `// pom.xml\n\n<groupId>\n\tsvn-name\n</groupId>\n\n<artifactId>\n\tsvn-name\n</artifactId>`,
        },
      },
      {
        text: "In the web.xml file, Set the display-name to match the name value from package.json",
        highlights: ["web.xml", "display-name", "package.json"],
        code: {
          language: "json",
          value: `// web.xml\n\n<display-name>\n\tpackage.json-name\n</display-name>`,
        },
      },
      {
        text: "In package.json add script",
        highlights: ["package.json"],
        code: {
          language: "json",
          value: `// package.json\n\n"scripts": {
  "mvn": "mvnd clean package",
}`,
        },
      },
      {
        text: "Configure the Vite base path (vite.config.ts)",
        highlights: ["Vite", "vite.config.ts"],
        code: {
          language: "json",
          value: `// vite.config.ts\n\nimport { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/svn-name/",
});
`,
        },
      },
      {
        text: "After setting the base path in vite.config.ts, pass Vite's BASE_URL to React Router's basename",
        highlights: ["vite.config.ts", "React Router's basename"],
        code: {
          language: "json",
          value: `// src/Router.tsx\n\nimport { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
`,
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
  //! 02
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
  //! 03
  {
    id: 3,
    section: "i18next",
    name: "How to Set Up react-i18next and i18next in a React.js Project (TypeScript)",
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
          value: `// assets/languages/en.json\n
{
  "translation": {
    "home": "HOME"
  }
}\n
// assets/languages/kh.json
{
  "translation": {
    "home": "ទំព័រដើម"
  }
}\n
`,
        },
      },
      {
        text: "Create a file named i18next.tsx inside the src folder and paste the following code",
        highlights: ["i18next.tsx", "src"],
        code: {
          language: "json",
          value: `// src/i18next.tsx\n
import i18next from "i18next";
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
          value: `// src/App.tsx\n
import { useEffect } from "react";
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
  //! 04
  {
    id: 4,
    name: "How to set up react query",
    section: "React Query",
    steps: [
      {
        text: "Install this package",
        code: {
          language: "json",
          value: `yarn add @tanstack/react-query@5.90.12`,
        },
      },
      {
        text: "Create a libs folder inside the src folder, then create one file inside it: ReactQuery.tsx",
        highlights: ["libs", "src", "ReactQuery.tsx"],
        code: {
          language: "json",
          value: `// src/libs/ReactQuery.tsx\n
import { QueryClient } from "@tanstack/react-query";

const defaultQueryClientOptions = {
  queries: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    retry: (failureCount: any, error: any) => {
      // Don't retry for 401 errors
      if (error?.response?.status === 401) return false;
      return failureCount < 3;
    },
    refetchOnMount: true, // triggers when the user navigates to another page and then comes back, as long as the component was unmounted and mounted again.
    refetchOnReconnect: true, // If the user loses internet and then reconnects, React Query will refetch the query automatically.
  },
};

export const query_client = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
`,
        },
      },
      {
        text: "Setup React Tanstack - QueryClientProvider",
        highlights: ["QueryClientProvider"],
        code: {
          language: "json",
          value: `// src/main.tsx\n
import "./index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { query_client } from "./libs/ReactQuery.tsx";
import { QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={query_client}>
        <App />
    </QueryClientProvider>
  </StrictMode>
);
`,
        },
      },
    ],
  },
  //! 05
  {
    id: 5,
    name: "How to set up website security for React.js (TypeScript)",
    section: "Security",
    steps: [
      {
        text: "Install these packages",
        code: {
          language: "json",
          value: `yarn add crypto-js js-cookie @types/crypto-js @types/js-cookie`,
        },
      },
      {
        text: "Create a utils folder inside the src folder, then create one file inside it: Secret.tsx",
        highlights: ["utils", "src", "Secret.tsx"],
        code: {
          language: "json",
          value: `src/utils/Secret.tsx\n
import cryptoJs from "crypto-js";
import Cookies from "js-cookie";

const charactor_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";
const cookie_list = ["access_token", "refresh_token"] as const;
const APP_NAME = "project";
const APP_SECRET = "project-secret";

type CookieKey = (typeof cookie_list)[number];

type CookieNameMap = {
  [key in CookieKey]: string;
};

// 1) Use a global path (+ consistent options for set/remove)
const COOKIE_OPTS = {
  path: "/",
  sameSite: "lax" as const,
  secure: typeof window !== "undefined" ? window.location.protocol === "https:" : true,
};

// 2) Guard decryption; clear bad cookies instead of throwing
function safeDecrypt(b64: string, secret: string): string | null {
  try {
    const wa = cryptoJs.AES.decrypt(b64, secret);
    const s = cryptoJs.enc.Utf8.stringify(wa); // throws on malformed bytes
    if (!s) throw new Error("empty");
    return s;
  } catch {
    // remove both cookies with the SAME options so we don't loop on bad data
    Cookies.remove(generated_cookie.access_token, COOKIE_OPTS);
    Cookies.remove(generated_cookie.refresh_token, COOKIE_OPTS);
    return null;
  }
}

function generateCookieName(): CookieNameMap {
  let helper_c = 10;
  for (let i = 0; i < APP_NAME.length; i++) {
    helper_c += APP_NAME.charCodeAt(i) ^ APP_NAME.length;
  }

  const generated_cookie_name = {} as CookieNameMap;

  cookie_list.forEach((cookie) => {
    let temp_cookie_name = "";
    for (let j = 0; j < cookie.length; j++) {
      const charCode = Math.floor((cookie.charCodeAt(j) * helper_c) % charactor_list.length);
      temp_cookie_name += charactor_list[charCode];
    }
    generated_cookie_name[cookie] = temp_cookie_name;
  });

  return generated_cookie_name;
}

export const generated_cookie = generateCookieName();

export const cookies = {
  get_token: (): string | null => {
    const access_token = Cookies.get(generated_cookie.access_token);
    return access_token ? safeDecrypt(access_token, APP_SECRET) : null; // 3) use safe decrypt
  },
  get_refresh_token: (): string | null => {
    const refresh_token = Cookies.get(generated_cookie.refresh_token);
    return refresh_token ? safeDecrypt(refresh_token, APP_SECRET) : null; // 3) use safe decrypt
  },
  set_token: (access_token: string, refresh_token: string): void => {
    // Clear first to avoid “half state”, then set with global path
    Cookies.remove(generated_cookie.access_token, COOKIE_OPTS);
    Cookies.remove(generated_cookie.refresh_token, COOKIE_OPTS);

    Cookies.set(generated_cookie.access_token, cryptoJs.AES.encrypt(access_token, APP_SECRET).toString(), COOKIE_OPTS);
    Cookies.set(generated_cookie.refresh_token, cryptoJs.AES.encrypt(refresh_token, APP_SECRET).toString(), COOKIE_OPTS);
  },
  clear_cookies: (): void => {
    Cookies.remove(generated_cookie.access_token, COOKIE_OPTS); // use same options!
    Cookies.remove(generated_cookie.refresh_token, COOKIE_OPTS);
  },
};
`,
        },
      },
    ],
  },
  //! 06
  {
    id: 6,
    name: "React Query CRUD (Part 1): How to create functions to fetch and mutate data from API - Progressing",
    section: "React Query",
    files: {
      PomXMLFile: "/pom.xml",
    },
    steps: [
      {
        text: "Download the required files",
      },
      {
        text: "Install this package",
        code: {
          language: "json",
          value: `yarn add axios crypto-js js-cookie @types/crypto-js @types/js-cookie`,
        },
      },
      {
        text: "Create a utils folder inside the src folder, then create two folders inside it: apis and hooks",
        highlights: ["utils", "src", "apis", "hooks"],
      },
      {
        text: "In apis folder create one file (e.g. province.tsx) and paste the following code",
        highlights: ["apis", "province.tsx"],
        code: {
          language: "ts",
          value: `// src/utils/apis/province.tsx\n
import axiosInstance from "../common/axiosInstance";
import assertValidId from "../common/assertValidId";

// //! POST: List Province with filters
export async function listProvince(payload: KeyValue): Promise<ResponseWithPagination<KeyValue[]>> {
  try {
    const res = await axiosInstance.post("/province/list", payload);

    const { header, body } = res.data;

    if (header.statusCode >= 200 && header.statusCode < 300) {
      return {
        pagination: header.pagination ?? null,
        body: body.map((province: KeyValue, index: number) => ({
          ...province,
          no: payload.rowsPerPage * (payload.page - 1) + index + 1,
        })),
      };
    }
    return Promise.reject(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
}
`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `//! GET: List Province Using Get
export async function listProvinceUsingGet(): Promise<ResponseAPI<KeyValue[]>> {
  try {
    const res = await axiosInstance.get("/province/list");

    const { header, body } = res.data;

    if (header.statusCode >= 200 && header.statusCode < 300) {
      return { header, body };
    } else {
      return Promise.reject(res.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
}
`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `//! POST: Create Province
export async function createProvince(payload: KeyValue): Promise<ResponseAPI<KeyValue>> {
  try {
    const res = await axiosInstance.post("/province/create", payload);

    const { header, body } = res.data;

    if (header.statusCode >= 200 && header.statusCode < 300) {
      return { header, body };
    } else {
      return Promise.reject(res.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
}
`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `//! PATCH: Update Province
export async function updateProvince(payload: KeyValue): Promise<ResponseAPI<KeyValue>> {
  const { id, ...rest } = payload;
  assertValidId(id);

  try {
    const res = await axiosInstance.patch("/province/update?id=" + id, rest);

    const { header, body } = res.data;

    if (header.statusCode >= 200 && header.statusCode < 300) {
      return { header, body };
    } else {
      return Promise.reject(res.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
}
`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `//! GET: Find Province
export async function findProvince(payload: { id: number }): Promise<ResponseAPI<KeyValue>> {
  const { id } = payload;
  assertValidId(id);

  try {
    const res = await axiosInstance.get("/province/find?id=" + id);

    const { header, body } = res.data;

    if (header.statusCode >= 200 && header.statusCode < 300) {
      return { header, body };
    } else {
      return Promise.reject(res.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
}
`,
        },
      },
      {
        text: "",
        code: {
          language: "json",
          value: `//! DELETE: Delete Province
export async function deleteProvince(payload: { id: number }): Promise<ResponseAPI<KeyValue>> {
  const { id } = payload;
  assertValidId(id);

  try {
    const res = await axiosInstance.delete("/province/delete?id=" + id);

    const { header, body } = res.data;

    if (header.statusCode >= 200 && header.statusCode < 300) {
      return { header, body };
    } else {
      return Promise.reject(res.data);
    }
  } catch (err) {
    return Promise.reject(err);
  }
}`,
        },
      },
    ],
  },
];
