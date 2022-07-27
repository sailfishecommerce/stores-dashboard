/* eslint-disable no-console */
import axios from "axios";

import type { progressStateType } from "@/typings";
import { applicationDetailsType } from "@/hooks/useAlgoliaIndex";
import { toast } from "react-toastify";

export default function uploadCSV(
  results: { data: any[] },
  setProgress: any,
  progress: progressStateType,
  setIsUploadSuccessful: any,
  appDetails: applicationDetailsType
) {
  setProgress({ ...progress, loading: true });

  const promises = results.data.map((dataItem: any, index) => {
    const currentIndex = index + 1;
    return axios
      .post("/api/upload-csv-to-swell", {
        dataItem,
        numberOfProducts: results.data.length,
        appDetails,
      })
      .then((response) => {
        console.log("response--0sve", response);
        setProgress((prevState: progressStateType) => ({
          ...prevState,
          uploaded: response?.data?.uploaded
            ? prevState.uploaded + 1
            : prevState.uploaded,
          total: response.data.total,
          error: null,
          loading: true,
        }));
      })
      .catch((error: any) => {
        if (error.response) {
          toast.error(
            `product-${currentIndex},  ${error?.response.data?.sku?.message}`
          );
        } else if (error.message) {
          toast.error(
            `${error?.message}-Network issues, product-${currentIndex}`
          );
        }
        return setProgress({
          ...progress,
          error: error.response
            ? `product-${currentIndex},  ${error?.response.data?.sku?.message}`
            : `${error?.message}-Network issues, product-${currentIndex}`,
          loading: false,
        });
      });
  });

  Promise.all(promises)
    .then((response) => {
      console.log("response-promise-all", response);
      setProgress((prevState: progressStateType) => ({
        ...prevState,
        loading: false,
      }));
      setIsUploadSuccessful(true);
    })
    .catch((error) => {
      console.log("error", error);
      setProgress((prevState: progressStateType) => ({
        ...prevState,
        loading: false,
        error,
      }));
      setIsUploadSuccessful(false);
    });
}
