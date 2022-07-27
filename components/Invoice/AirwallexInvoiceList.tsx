import Image from "next/image";

import FormattedPrice from "@/components/Price/FormattedPrice";

export default function AirwallexInvoiceList({ currency, product }: any) {
  const itemTotal = product.quantity * product.unit_price;
  return (
    <>
      <tr className="view hover:bg-gray-100 border-b py-2">
        <td className="w-1/2">
          <div className="product-view flex items-center">
            <img
              src={product.url}
              alt={product?.name}
              height={150}
              width={150}
            />
            <div className="content flex flex-col ml-2">
              <h1 className="font-medium  text-md">{product?.name}</h1>
              <p className="font-medium text-md mt-2">SKU {product?.sku}</p>
            </div>
          </div>
        </td>
        <td className="w-1/6 text-center">
          <div className="price flex flex-col">
            <FormattedPrice
              currency={currency}
              price={product.unit_price}
              className="text-md font-medium"
            />
          </div>
        </td>
        <td className="w-1/6 text-center">
          <p className="font-medium text-md quantity">{product.quantity}</p>
        </td>
        <td className="w-1/6 text-center">
          <FormattedPrice
            className="text-md font-medium"
            price={itemTotal}
            currency={currency}
          />
        </td>
      </tr>
    </>
  );
}
