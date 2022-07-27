import axios from "axios";
import { useQuery } from "react-query";

async function getAProduct(id: string) {
  return await axios.post("/api/get-a-product", { id });
}

export default function useProduct(id: string) {
  const { data, status } = useQuery(
    `getAProduct-${id}`,
    () => getAProduct(id),
    {
      enabled: !!id,
    }
  );

  return [data?.data, status];
}
