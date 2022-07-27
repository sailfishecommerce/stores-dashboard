import FormattedPrice from "@/components/Price/FormattedPrice";
import useProduct from "@/hooks/useProduct";
import SpinnerRipple from "../Loader/SpinnerRipple";

export default function InvoiceList({ productId, quantity, priceTotal }: any) {
  const [data, status] = useProduct(productId);

  function getProductImage(images: any) {
    return typeof images[0] === "string" ? images[0] : images[0].file.url;
  }

  return (
    <>
      {status === "error" ? (
        "error fetching products"
      ) : status === "loading" ? (
        <SpinnerRipple centerRipple />
      ) : (
        <tr className="view hover:bg-gray-100 border-b py-2">
          <td className="w-1/2">
            <div className="product-view flex items-center">
              <img
                src={getProductImage(data.images)}
                alt={data?.name}
                height={150}
                width={150}
              />
              <div className="content flex flex-col ml-2">
                <h1 className="font-medium  text-md">{data?.name}</h1>
                <p className="font-medium text-md mt-2">SKU {data?.sku}</p>
              </div>
            </div>
          </td>
          <td className="w-1/6 text-center">
            <div className="price flex flex-col">
              {data?.compare_at_price > data?.sale_price && (
                <FormattedPrice
                  price={data?.price}
                  className="text-md font-bold strike-through"
                  currency={data.currency}
                />
              )}
              <FormattedPrice
                currency={data.currency}
                price={data?.sale_price}
                className="text-md font-medium"
              />
            </div>
          </td>
          <td className="w-1/6 text-center">
            <p className="font-medium text-md quantity">{quantity}</p>
          </td>
          <td className="w-1/6 text-center">
            <FormattedPrice
              className="text-md font-medium"
              price={priceTotal}
              currency={data.currency}
            />
          </td>
        </tr>
      )}
    </>
  );
}
