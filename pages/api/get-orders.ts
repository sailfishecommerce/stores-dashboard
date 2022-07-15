import type { NextApiRequest, NextApiResponse } from "next";
import swell from "swell-node";

import swellNodeInit from "../../utils/swellNode";

export default async function InvoiceHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  swellNodeInit();
  switch (req.method) {
    case "GET": {
      return await swell
        .get("/orders", {
          limit: 50,
        })
        .then((response: any) => {
          return res.status(200).send(response);
        });
    }
    default:
      return null;
  }
}
