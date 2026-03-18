import type { Preview } from "@storybook/react-vite";
import { createElement } from "react";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    globalTypes: {
        layout: {
            name: "Layout",
            description: "Keycloak layout",
            defaultValue: "centered-card",
            toolbar: {
                icon: "mirror",
                items: ["two-column", "centered-card", "image-aside"]
            }
        },
        locale: {
            name: "Locale",
            description: "Keycloak locale",
            defaultValue: "en",
            toolbar: {
                icon: "globe",
                items: [
                    "ar",
                    "ca",
                    "cs",
                    "da",
                    "de",
                    "el",
                    "en",
                    "es",
                    "fa",
                    "fi",
                    "fr",
                    "hu",
                    "it",
                    "ja",
                    "ka",
                    "lt",
                    "lv",
                    "nl",
                    "no",
                    "pl",
                    "pt",
                    "pt-BR",
                    "ru",
                    "sk",
                    "sv",
                    "th",
                    "tr",
                    "uk",
                    "zh-CN",
                    "zh-TW"
                ]
            }
        }
    },
    decorators: [
        (Story, context) => {
            const locale = String(context.globals.locale ?? "en");
            const layout = String(context.globals.layout ?? "image-aside");

            const storyArgs = {
                ...context.args,
                kcContext: {
                    ...context.args.kcContext,
                    locale: {
                        currentLanguageTag: locale
                    },
                    properties: {
                        ...context.args.kcContext?.properties,
                        SHADECN_THEME_LAYOUT: layout
                    }
                }
            };

            return createElement(Story as never, {
                args: storyArgs,
                key: `${context.id}-${layout}-${locale}`
            });
        }
    ]
};

export default preview;
