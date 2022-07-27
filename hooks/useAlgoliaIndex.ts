import { useAtom } from "jotai";

import { appDetailsAtom } from "@/utils/atomConfig";
import { formatAlgoliaDetails } from "@/utils/formatAlgoliaDetails";

export type applicationDetailsType = {
  ID: string;
  ADMIN_API_KEY: string;
  INDEX_NAME: string;
};

export default function useAlgoliaIndex() {
  const [appDetails, setAppDetails] = useAtom(appDetailsAtom);

  function setActiveStore(activeStoreName: string) {
    const activeStoreData = formatAlgoliaDetails(activeStoreName);
    setAppDetails(activeStoreData);
  }

  return {
    setActiveStore,
    appDetails,
  };
}
