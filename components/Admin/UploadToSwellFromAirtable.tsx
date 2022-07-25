/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { useAtom } from "jotai";

import Dropzonebar from "@/components/Dropzonebar";
import useCSVDropzone from "@/hooks/useCSVDropzone";
import useToast from "@/hooks/useToast";
import uploadCSV from "@/utils/uploadCSV";
import { selectStoreAtom } from "@/utils/atomConfig";

export default function UploadToSwellFromAirtable() {
  const [selectStore, setSelectStore] = useAtom(selectStoreAtom);
  const disableDropdzone = selectStore === null ? true : false;
  const { progress, dropzone, style, isUploadSuccessful } = useCSVDropzone(
    uploadCSV,
    disableDropdzone
  );
  const { loadingToast, updateToast } = useToast();
  const toastID = useRef(null);

  useEffect(() => {
    if (progress.loading) {
      loadingToast(toastID);
    } else if (progress.uploaded > 0) {
      updateToast(toastID);
    }
  }, [progress.loading]);

  useEffect(() => {
    toast.error(progress.error);
    if (progress.uploaded > 0) {
      toast.success(`${progress.uploaded} products uploaded`);
    }
  }, [progress.error]);

  function selectHandler(e: any) {
    setSelectStore(e.target.value);
  }

  return (
    <div className="w-4/5 mx-auto mt-10">
      <h1 className="text-center text-2xl">
        Upload your CSV files from
        <span className="font-semibold ml-1">
          Airtable to Swell and Algolia at once
        </span>
      </h1>
      <p className="text-lg mt-4 text-center">
        For effective upload, Upload a maximum of 500 products at a time
      </p>
      <div className="select-store flex items-center">
        <h4 className="font-bold text-xl">Select Store</h4>
        <select className="ml-4" onChange={selectHandler}>
          <option value="livehealthy">Live Healthy store</option>
          <option value="docsupplies">Docsupplies store</option>
        </select>
      </div>
      <Dropzonebar
        progress={progress}
        style={style}
        dropzone={dropzone}
        fileType="csv"
        uploadStatus={isUploadSuccessful}
        active={disableDropdzone}
      />
    </div>
  );
}
