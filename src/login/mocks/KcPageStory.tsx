import type { DeepPartial } from "@keycloakify/login-ui/tools/DeepPartial";
import type { KcContext } from "../KcContext";
import KcPage from "../KcPage";
import { getKcContextMock } from "./getKcContextMock";
export type { Meta, StoryObj } from "../../kc.gen";

export function createKcPageStory<PageId extends KcContext["pageId"]>(params: {
    pageId: PageId;
}) {
    const { pageId } = params;

    function KcPageStory(props: {
        kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>>;
        logoWhiteUrl?: string;
        logoDarkUrl?: string;
        sideImageUrl?: string;
    }) {
        const { kcContext: overrides, logoWhiteUrl, logoDarkUrl, sideImageUrl } = props;

        const kcContextMock = getKcContextMock({
            pageId,
            overrides: {
                ...overrides,
                properties: {
                    ...overrides?.properties,
                    SHADCN_THEME_LOGO_WHITE_URL: logoWhiteUrl,
                    SHADCN_THEME_LOGO_DARK_URL: logoDarkUrl,
                    SHADCN_THEME_SIDE_IMAGE_URL: sideImageUrl
                }
            }
        });

        return <KcPage kcContext={kcContextMock} />;
    }

    return { KcPageStory };
}
