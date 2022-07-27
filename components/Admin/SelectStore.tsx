import { useAtom } from "jotai";

import { selectStoreAtom } from "@/utils/atomConfig";
import useAlgoliaIndex from "@/hooks/useAlgoliaIndex";

export default function SelectStore() {
  const [selectStore, setSelectStore] = useAtom(selectStoreAtom);
  const { setActiveStore, appDetails } = useAlgoliaIndex();
  function selectHandler(e: any) {
    setSelectStore(e.target.value);
    setActiveStore(e.target.value);
  }

  console.log("applicationDetails", appDetails);

  function formatSelectedStore(selectedStore: string) {
    switch (selectedStore) {
      case "livehealthy":
        return "Live Healthy store";
      case "docsupplies":
        return "Docsupplies store";
      case "sailfish":
        return "Sailfish store";
      case "luxury_of_australia":
        return "Luxury of Australia store";
      default:
        return "";
    }
  }

  return (
    <div className="select-store flex flex-col mt-3">
      <div className="row-1 flex">
        <h4 className="font-semibold text-xl">Upload to Store</h4>
        <select className="ml-4" onChange={selectHandler}>
          <option>Select store</option>
          <option value="livehealthy">Live Healthy store</option>
          <option value="docsupplies">Docsupplies store</option>
          <option value="sailfish">Sailfish store</option>
          <option value="luxury_of_australia">Luxury of Australia store</option>
        </select>
      </div>
      {selectStore && (
        <h4 className="font-semibold text-xl mt-1">
          Active store:
          <span className=" text-green-500 ml-1">
            {formatSelectedStore(selectStore)}
          </span>
        </h4>
      )}
    </div>
  );
}
