export function formatAlgoliaDetails(selectedIndexname: string) {
  switch (selectedIndexname) {
    case "livehealthy":
      return {
        ID: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_APP_ID}`,
        ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`,
        INDEX_NAME: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`,
      };
    case "docsupplies":
      return {
        ID: `${process.env.NEXT_PUBLIC_DOCSUPPLIES_INSTANTSEARCH_APP_ID}`,
        ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_DOCSUPPLIES_ALGOLIA_ADMIN_API_KEY}`,
        INDEX_NAME: `${process.env.NEXT_PUBLIC_DOCSUPPLIES_INSTANTSEARCH_INDEX_NAME}`,
      };
    case "sailfish":
      return {
        ID: `${process.env.NEXT_PUBLIC_SAILFISH_INSTANTSEARCH_APP_ID}`,
        ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_SAILFISH_ALGOLIA_ADMIN_API_KEY}`,
        INDEX_NAME: `${process.env.NEXT_PUBLIC_SAILFISH_INSTANTSEARCH_INDEX_NAME}`,
      };
    case "luxury_of_australia":
      return {
        ID: `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_INSTANTSEARCH_APP_ID}`,
        ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_ALGOLIA_ADMIN_API_KEY}`,
        INDEX_NAME: `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_INSTANTSEARCH_INDEX_NAME}`,
      };
    default:
      return {
        ID: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_APP_ID}`,
        ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`,
        INDEX_NAME: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`,
      };
  }
}
