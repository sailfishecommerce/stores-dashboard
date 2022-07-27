import { useState } from "react";

export type applicationDetailsType = {
  ID: string;
  ADMIN_API_KEY: string;
  INDEX_NAME: string;
};

export default function useAlgoliaIndex() {
  const [appDetails, setAppDetails] = useState<applicationDetailsType>({
    ID: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_APP_ID}`,
    ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`,
    INDEX_NAME: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`,
  });

  function setActiveStore(activeStoreName: string) {
    switch (activeStoreName) {
      case "livehealthy":
        return setAppDetails({
          ID: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_APP_ID}`,
          ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`,
          INDEX_NAME: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`,
        });
      case "docsupplies":
        return setAppDetails({
          ID: `${process.env.NEXT_PUBLIC_DOCSUPPLIES_INSTANTSEARCH_APP_ID}`,
          ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_DOCSUPPLIES_ALGOLIA_ADMIN_API_KEY}`,
          INDEX_NAME: `${process.env.NEXT_PUBLIC_DOCSUPPLIES_INSTANTSEARCH_INDEX_NAME}`,
        });
      case "sailfish":
        return setAppDetails({
          ID: `${process.env.NEXT_PUBLIC_SAILFISH_INSTANTSEARCH_APP_ID}`,
          ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_SAILFISH_ALGOLIA_ADMIN_API_KEY}`,
          INDEX_NAME: `${process.env.NEXT_PUBLIC_SAILFISH_INSTANTSEARCH_INDEX_NAME}`,
        });
      case "luxury_of_australia":
        return setAppDetails({
          ID: `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_INSTANTSEARCH_APP_ID}`,
          ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_ALGOLIA_ADMIN_API_KEY}`,
          INDEX_NAME: `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_INSTANTSEARCH_INDEX_NAME}`,
        });
      default:
        return setAppDetails({
          ID: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_APP_ID}`,
          ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`,
          INDEX_NAME: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`,
        });
    }
  }

  return {
    setActiveStore,
    appDetails,
  };
}
