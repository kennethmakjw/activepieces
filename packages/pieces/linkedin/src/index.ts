import { PieceAuth, createPiece } from "@activepieces/pieces-framework";

import { createShareUpdate } from "./lib/actions/create-share-update";
import { createCompanyUpdate } from "./lib/actions/create-company-update";

export const linkedinAuth = PieceAuth.OAuth2({
    authUrl: 'https://www.linkedin.com/oauth/v2/authorization',
    tokenUrl: 'https://www.linkedin.com/oauth/v2/accessToken',
    required: true,
    scope: ['w_member_social', 'openid', 'email', 'profile']
    //w_organization_social and rw_organization_admin temporarily disabled until granted permission by linkedin
})

export const linkedin = createPiece({
    displayName: "LinkedIn",
    minimumSupportedRelease: '0.5.0',
    logoUrl: "https://cdn.activepieces.com/pieces/linkedin.png",
    authors: ['MoShizzle'],
    auth: linkedinAuth,
    actions: [createShareUpdate, createCompanyUpdate],
    triggers: [],
});
