import axios from "axios";
import { useQuery } from "react-query";

function getOrders(id: string) {
  return axios.post("/api/get-order", { id });
}

export default function useOrderInvoice(id: string) {
  return useQuery("getAnInvoice", () => getOrders(id), {
    enabled: !!id,
  });
}
