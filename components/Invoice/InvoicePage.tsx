import InvoiceFooter from "@/components/Invoice/InvoiceFooter";
import InvoiceList from "@/components/Invoice/InvoiceList";
import Logo from "@/components/Logo";
import FormattedPrice from "@/components/Price/FormattedPrice";
import { formatOrderDate } from "@/utils/formatOrderDate";
import getCountry from "@/utils/getCountry";
import getShippingMethod from "@/utils/shippingMethod";

const style = { width: "100%" };

export default function InvoicePage({ invoice }: any) {
  const paymentMethod = invoice?.billing.intent?.stripe.id
    ? `Stripe ${invoice?.billing?.intent?.stripe.id.toUpperCase()}`
    : "";
  const shippingMethod = getShippingMethod(invoice);
  console.log("invoice", invoice);
  return (
    <>
      <div
        style={style}
        className="invoice-receipt my-12 bg-white p-6 rounded-xl"
      >
        <div className="row flex justify-between  mb-16 items-center">
          <Logo className="w-1/6" />
          <div className="invoice-date flex flex-col">
            <h1 className="text-2xl font-bold">{invoice?.number}</h1>
            <h5 className="font-light text-lg">
              {formatOrderDate(invoice?.date_created)}
            </h5>
          </div>
        </div>
        <div className="row details grid grid-cols-3">
          <div className="shipping-address">
            <h1 className="font-semibold text-lg my-2">SHIPPING ADDRESS</h1>
            <p className="font-light">Flat B, 16/F-Tower 7, </p>
            <p className="font-light">The Beaumount, 8 Shek Kok Road,</p>
            <p className="font-light">Kennedy town,</p>
            <p className="font-light">Hong Kong</p>
          </div>
          <div className="customer">
            <h1 className="font-semibold text-lg my-2">CUSTOMER</h1>
            <p className="font-light">{invoice.billing.name}</p>
            <p className="font-light">{invoice.billing.address1}</p>
            <p className="font-light">{invoice.billing.address2}</p>
            <p className="font-light">{`${invoice.billing.zip} ${invoice.billing.city}`}</p>
            <p className="font-light">
              {invoice.billing.city} {getCountry(invoice.billing.country)}
            </p>
          </div>
          <div className="group">
            <div className="payment-method">
              <h1 className="font-semibold text-lg my-2">PAYMENT METHOD</h1>
              <p className="font-light">{paymentMethod}</p>
            </div>
            <div className="shipping-method">
              <h1 className="font-semibold text-lg my-2">SHIPPING METHOD</h1>
              <p className="font-light">{shippingMethod[0]?.name}</p>
              <p className="font-light">COVID-19 might cause delays</p>
            </div>
          </div>
        </div>
        <div className="row items mt-6">
          <table>
            <thead>
              <tr className="border-b">
                <th>ITEMS</th>
                <th>PRICE</th>
                <th>QTY</th>
                <th>ITEM TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item: any) => {
                let product;
                if (invoice.products !== null) {
                  product = invoice?.products?.filter(
                    (productItem: any) => productItem.id === item.product_id
                  )[0];
                } else {
                  product = null;
                }
                return (
                  <InvoiceList
                    key={item.id}
                    product={product}
                    item={item}
                    currency={invoice.currency}
                  />
                );
              })}
              <tr className="subtotal">
                <td></td>
                <td></td>
                <td className="text-center">
                  <p className="font-medium text-md">Subtotal</p>
                </td>
                <td className="text-center">
                  <FormattedPrice
                    currency={invoice.currency}
                    price={invoice.sub_total}
                    className="text-md font-medium"
                  />
                </td>
              </tr>{" "}
              <tr className="shipping">
                <td></td>
                <td></td>
                <td className="text-center">
                  <p className="font-medium text-md">Shipping</p>
                </td>
                <td className="text-center">
                  <FormattedPrice
                    currency={invoice.currency}
                    price={invoice.shipment_total}
                    className="text-md font-medium"
                  />
                </td>
              </tr>
              <tr className="total">
                <td></td>
                <td></td>
                <td className="text-center">
                  <p className="font-bold text-lg">
                    TOTAL ({invoice.currency})
                  </p>
                </td>
                <td className="text-center">
                  <FormattedPrice
                    currency={invoice.currency}
                    price={invoice.grand_total}
                    className="text-lg font-bold"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <InvoiceFooter />
      </div>
      <style jsx>
        {`
          .row.items table {
            width: 100%;
          }
          .row.items tr {
            height: 60px;
          }
          .row.items tr.last {
            border-bottom: 1px solid #e5e5e6;
          }
        `}
      </style>
    </>
  );
}
