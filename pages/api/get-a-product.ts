import type { NextApiRequest, NextApiResponse } from "next";
import swell from "swell-node";

import swellNodeInit from "../../utils/swellNode";

export default async function GetProductHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  swellNodeInit();
  console.log("req.body.id", req.body.id);
  switch (req.method) {
    case "POST": {
      return await swell
        .get(`/products/${req.body.id}`)
        .then((response: any) => {
          return res.status(200).send(response);
        })
        .catch((err: any) => console.log("error", err));
    }
    default:
      return null;
  }
}
