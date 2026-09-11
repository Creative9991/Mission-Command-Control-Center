// Static UI images (flags, agency logos, planet renders, etc.) are served from
// CloudFront in front of s3://spaceagencies/ui-assets/ instead of being bundled
// into the app -- see fix-agency-mission-data.js's sibling upload step and the
// README's Architecture section for how they got there.
const ASSET_BASE_URL =
  process.env.REACT_APP_ASSET_CDN_URL || "https://d2m7uc5eskrsnq.cloudfront.net";

export const assetUrl = (filename) => `${ASSET_BASE_URL}/${filename}`;
