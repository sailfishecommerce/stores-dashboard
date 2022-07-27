/* eslint-disable react-hooks/exhaustive-deps */
import Papa from "papaparse";
import { useCallback, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

import { styles } from "@/components/Admin/styles";
import type { progressStateType } from "@/typings";
import useAlgoliaIndex, {
  applicationDetailsType,
} from "@/hooks/useAlgoliaIndex";
import { useAtom } from "jotai";
import { selectStoreAtom } from "@/utils/atomConfig";

type uploadCSVType = (
  results: { data: any[] },
  setProgress: any,
  progress: progressStateType,
  setIsUploadSuccessful: any,
  appDetails: applicationDetailsType
) => void;

export default function useCSVDropzone(
  uploadCSV: uploadCSVType,
  disableDropzone?: boolean
) {
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(null);
  const [selectStore] = useAtom(selectStoreAtom);
  const { appDetails } = useAlgoliaIndex();

  const [progress, setProgress] = useState({
    uploaded: 0,
    total: 0,
    loading: false,
    error: null,
  });

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      const csvFile = acceptedFiles[0];
      Papa.parse(csvFile, {
        header: true,
        skipEmptyLines: true,
        complete: (results: any) => {
          uploadCSV(
            results,
            setProgress,
            progress,
            setIsUploadSuccessful,
            appDetails
          );
        },
      });
    },
    [selectStore]
  );

  const dropzone = useDropzone({
    disabled: disableDropzone,
    onDrop,
    accept: {
      "text/csv": [
        ".csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values",
      ],
    },
  });

  const style: any = useMemo(
    () => ({
      ...styles.baseStyle,
      ...(dropzone.isFocused ? styles.focusedStyle : {}),
      ...(dropzone.isDragAccept ? styles.acceptStyle : {}),
      ...(dropzone.isDragReject ? styles.rejectStyle : {}),
    }),
    [dropzone.isFocused, dropzone.isDragAccept, dropzone.isDragReject]
  );

  return { progress, dropzone, style, isUploadSuccessful };
}
