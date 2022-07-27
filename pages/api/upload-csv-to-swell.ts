/* eslint-disable consistent-return */
/* eslint-disable no-console */
import algoliasearch from "algoliasearch";
import type { NextApiRequest, NextApiResponse } from "next";
import swell from "swell-node";

import swellNodeInit from "@/utils/swellNode";
import toShopifyProductModel from "@/utils/toShopifyProductModel";
import formattedUrlArray from "@/hooks/useFormatProductImage";
import { hierarchicalCategory } from "@/utils/formatToAlgolia";
import useAlgoliaIndex from "@/hooks/useAlgoliaIndex";

export default async function UploadProductToSwellHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  swellNodeInit();
  const productData = req.body.dataItem;
  const total = req.body.numberOfProducts;
  const formatUrl = productData["Image Src"]?.split(";");
  const formatUrlArray = await formattedUrlArray(formatUrl, productData);
  const swellProducts = toShopifyProductModel(productData, formatUrlArray);
  const { appDetails } = useAlgoliaIndex();
  const client = algoliasearch(appDetails.ID, appDetails.ADMIN_API_KEY);
  const index = client.initIndex(appDetails.INDEX_NAME);

  console.log("applicationDetails", appDetails);

  switch (req.method) {
    case "POST": {
      return await swell
        .post("/products", swellProducts)
        .then((response: any) => {
          if (!response?.errors) {
            const formattedCategories = hierarchicalCategory(
              response.product_categories
            );
            const formattedProduct = { ...formattedCategories, ...response };

            return index
              .saveObject(formattedProduct, {
                autoGenerateObjectIDIfNotExist: true,
              })
              .then((responseItem: any) => {
                console.log("response-algolia", responseItem);
                return res
                  .status(200)
                  .json({ status: "ok", uploaded: true, total });
              })
              .catch((error) => {
                console.log("error", error);
                return res.status(400).json(error);
              });
          }
        })
        .catch((error: any) => {
          console.error("error createSwellProductHandler", error);
          throw Error(error);
        });
    }
    default:
      return null;
  }
}
