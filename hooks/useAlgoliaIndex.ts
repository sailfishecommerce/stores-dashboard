import { selectStoreAtom } from "@/utils/atomConfig";
import { useAtom } from "jotai";

type applicationDetailsType = {
  ID: string;
  ADMIN_API_KEY: string;
  INDEX_NAME: string;
};

export default function useAlgoliaIndex() {
  const [activeStore] = useAtom(selectStoreAtom);
  let applicationDetails: applicationDetailsType = {
    ID: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_APP_ID}`,
    ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`,
    INDEX_NAME: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`,
  };

  switch (activeStore) {
    case "livehealthy":
      applicationDetails.ID = `${process.env.NEXT_PUBLIC_INSTANTSEARCH_APP_ID}`;
      applicationDetails.ADMIN_API_KEY = `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`;
      applicationDetails.INDEX_NAME = `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`;
    case "docsupplies":
      applicationDetails.ID = `${process.env.NEXT_PUBLIC_DOCSUPPLIES_INSTANTSEARCH_APP_ID}`;
      applicationDetails.ADMIN_API_KEY = `${process.env.NEXT_PUBLIC_DOCSUPPLIES_ALGOLIA_ADMIN_API_KEY}`;
      applicationDetails.INDEX_NAME = `${process.env.NEXT_PUBLIC_DOCSUPPLIES_INSTANTSEARCH_INDEX_NAME}`;
    case "sailfish":
      applicationDetails.ID = `${process.env.NEXT_PUBLIC_SAILFISH_INSTANTSEARCH_APP_ID}`;
      applicationDetails.ADMIN_API_KEY = `${process.env.NEXT_PUBLIC_SAILFISH_ALGOLIA_ADMIN_API_KEY}`;
      applicationDetails.INDEX_NAME = `${process.env.NEXT_PUBLIC_SAILFISH_INSTANTSEARCH_INDEX_NAME}`;
    case "luxury_of_australia":
      applicationDetails.ID = `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_INSTANTSEARCH_APP_ID}`;
      applicationDetails.ADMIN_API_KEY = `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_ALGOLIA_ADMIN_API_KEY}`;
      applicationDetails.INDEX_NAME = `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_INSTANTSEARCH_INDEX_NAME}`;
    default:
      applicationDetails.ID = `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_INSTANTSEARCH_APP_ID}`;
      applicationDetails.ADMIN_API_KEY = `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_ALGOLIA_ADMIN_API_KEY}`;
      applicationDetails.INDEX_NAME = `${process.env.NEXT_PUBLIC_LUXURYOFAUSTRALIA_INSTANTSEARCH_INDEX_NAME}`;
  }

  return {
    applicationDetails,
  };
}
