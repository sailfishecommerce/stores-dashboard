/* eslint-disable jsx-a11y/alt-text */
import { Document, Page, Text, Image, View } from "@react-pdf/renderer";

import InvoiceListPdf from "@/components/Invoice/InvoiceListPdf";
import InvoicePdfFooter from "@/components/Invoice/InvoicePdfFooter";
import { styles } from "@/components/Invoice/invoice-style";
import FormattedPrice from "@/components/Price/FormattedPrice";
import { formatOrderDate } from "@/utils/formatOrderDate";
import getCountry from "@/utils/getCountry";
import getShippingMethod from "@/utils/shippingMethod";

export default function InvoicePdf({ invoice }: any) {
  const paymentMethod = invoice?.billing.intent?.stripe.id
    ? `Stripe ${invoice?.billing?.intent?.stripe.id.toUpperCase()}`
    : "";
  const shippingMethod = getShippingMethod(invoice);

  return (
    <Document>
      <Page wrap={true} size="A4" style={styles.page}>
        <View style={styles.header}>
          <Image
            src="https://res.cloudinary.com/verrb-inc/image/upload/v1653526669/Logo_1_a7apg1.png"
            style={styles.image}
          />
          <View style={styles.toRight}>
            <Text style={styles.orderNumber}>{invoice?.number}</Text>
            <Text style={styles.date}>
              {formatOrderDate(invoice?.date_created)}
            </Text>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.shippingView}>
            <Text style={styles.title}>SHIPPING ADDRESS</Text>
            <Text style={styles.text}>
              {invoice?.shipping.address1} {invoice?.shipping?.address2}
            </Text>
            <Text style={styles.text}>
              {invoice?.shipping.zip} {invoice?.shipping.city}
              {invoice?.shipping.state}
            </Text>
            <Text style={styles.text}>
              {getCountry(invoice?.shipping.country)}
            </Text>
          </View>
          <View style={styles.customerView}>
            <Text style={styles.title}>CUSTOMER</Text>
            <Text style={styles.text}>{invoice.billing.name}</Text>
            <Text style={styles.text}>{invoice.billing.address1}</Text>
            <Text style={styles.text}>{invoice.billing.address2}</Text>
            <Text
              style={styles.text}
            >{`${invoice.billing.zip} ${invoice.billing.city}`}</Text>
            <Text style={styles.text}>
              {invoice.billing.city} {getCountry(invoice.billing.country)}
            </Text>
          </View>
          <View style={styles.paymentMethod}>
            <View>
              <Text style={styles.title}>PAYMENT METHOD</Text>
              <Text style={styles.text}>{paymentMethod}</Text>
            </View>
            <View>
              <Text style={styles.title}>SHIPPING METHOD</Text>
              <Text style={styles.text}>
                {shippingMethod !== undefined ? shippingMethod[0]?.name : ""}
              </Text>
              <Text style={styles.text}>COVID-19 might cause delays</Text>
            </View>
          </View>
        </View>
        <View style={styles.row3}>
          <Text style={styles.itemsTitle}>ITEMS</Text>
          <Text style={styles.priceTitle}>PRICE</Text>
          <Text style={styles.quantity}>QTY</Text>
          <Text style={styles.rowTitle}>ITEM TOTAL</Text>
        </View>
        <View>
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
              <InvoiceListPdf
                key={item.id}
                product={product}
                item={item}
                currency={invoice.currency}
              />
            );
          })}
        </View>
        <View style={styles.row4}>
          <View style={styles.innerRow}>
            <Text style={styles.text}>Subtotal</Text>
            <Text style={styles.text}>
              <FormattedPrice
                currency={invoice.currency}
                price={invoice.sub_total}
                className="text-md font-thin"
              />
            </Text>
          </View>
          <View style={styles.innerRow}>
            <Text style={styles.text}>Shipping</Text>
            <Text style={styles.text}>
              <FormattedPrice
                currency={invoice.currency}
                price={invoice.shipment_total}
                className="text-md font-thin"
              />
            </Text>
          </View>
          <View style={styles.innerRow}>
            <Text style={styles.title}>TOTAL ({invoice.currency})</Text>
            <Text style={styles.title}>
              <FormattedPrice
                currency={invoice.currency}
                price={invoice.grand_total}
                className="text-lg font-bold"
              />
            </Text>
          </View>
          <View style={styles.totalEnd} />
        </View>
        <InvoicePdfFooter />
      </Page>
    </Document>
  );
}
