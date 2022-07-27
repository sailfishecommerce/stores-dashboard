import Image from "next/image";
import { useCallback } from "react";

import FormattedPrice from "@/components/Price/FormattedPrice";

export default function InvoiceList({ currency, product, item }: any) {
  const productImageCallback = useCallback(() => {
    return typeof product?.images[0] === "string"
      ? product?.images[0]
      : product?.images[0].file.url;
  }, [product?.images]);

  const productImage = productImageCallback();

  console.log("productImage", productImage);
  console.log("product", product);

  return (
    <>
      {product !== undefined || product !== null ? (
        <tr className="view hover:bg-gray-100 border-b py-2">
          <td className="w-1/2">
            <div className="product-view flex items-center">
              <img
                src={productImage}
                alt={product?.name}
                height={150}
                width={200}
              />
              <div className="content flex flex-col ml-2">
                <h1 className="font-medium  text-md">{product?.name}</h1>
                <p className="font-medium text-md mt-2">SKU {product?.sku}</p>
              </div>
            </div>
          </td>
          <td className="w-1/6 text-center">
            {productImage !== undefined && (
              <div className="price flex flex-col">
                {item?.orig_price > item?.price && (
                  <FormattedPrice
                    price={item?.orig_price}
                    className="text-md font-bold strike-through"
                    currency={currency}
                  />
                )}
                <FormattedPrice
                  currency={currency}
                  price={item.price}
                  className="text-md font-medium"
                />
              </div>
            )}
          </td>
          <td className="w-1/6 text-center">
            <p className="font-medium text-md quantity">{item.quantity}</p>
          </td>
          <td className="w-1/6 text-center">
            <FormattedPrice
              className="text-md font-medium"
              price={item?.price_total}
              currency={currency}
            />
          </td>
        </tr>
      ) : (
        <tr>
          <td>{null}</td>
        </tr>
      )}
    </>
  );
}
