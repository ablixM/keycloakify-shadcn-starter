import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { buildEmailTheme } from "keycloakify-emails";
import { keycloakify } from "keycloakify/vite-plugin";
import path from "node:path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        keycloakify({
            accountThemeImplementation: "none",
            themeName: "acme-theme",
            keycloakVersionTargets: {
                "22-to-25": false,
                "all-other-versions": "acme-theme.jar"
            },
            environmentVariables: [
                { name: "SHADECN_THEME_LOGO_URL", default: "" },
                { name: "SHADECN_THEME_APP_NAME", default: "Acme Inc." },
                { name: "SHADECN_THEME_LAYOUT", default: "image-aside" },
                { name: "SHADECN_THEME_SIDE_IMAGE_URL", default: "" }
            ],
            postBuild: async buildContext => {
                await buildEmailTheme({
                    templatesSrcDirPath: path.join(
                        buildContext.themeSrcDirPath,
                        "email",
                        "templates"
                    ),
                    i18nSourceFile: path.join(
                        buildContext.themeSrcDirPath,
                        "email",
                        "i18n.ts"
                    ),
                    themeNames: buildContext.themeNames,
                    keycloakifyBuildDirPath: buildContext.keycloakifyBuildDirPath,
                    locales: ["en", "fr", "ar"],
                    esbuild: {
                        jsx: "automatic"
                    },
                    cwd: import.meta.dirname,
                    environmentVariables: buildContext.environmentVariables
                });
            }
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
});
