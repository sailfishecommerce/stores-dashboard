/* eslint-disable no-nested-ternary */
import { useAtom } from "jotai";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import DashboardMainView from "@/components/Dashboard/DashboardMainView";
import SpinnerRipple from "@/components/Loader/SpinnerRipple";
import useOrderInvoice from "@/hooks/useOrderInvoice";
import DashboardLayout from "@/layouts/dashboard-layout";
import { airwallexAdminPaymentAtom } from "@/utils/atomConfig";

const DynamicAirwallexInvoice = dynamic(
  () =>
    import(
      /* webpackChunkName: 'AirwallexInvoice' */ "@/components/Invoice/AirwallexInvoice"
    )
);

const DynamicInvoice = dynamic(
  () => import(/* webpackChunkName: 'Invoice' */ "@/components/Invoice")
);

export default function InvoicePage(props: any) {
  const router = useRouter();
  const orderId: string | any = router?.query.id;
  const { data, status } = useOrderInvoice(orderId);
  const [airwallexAdminPayment] = useAtom(airwallexAdminPaymentAtom);

  console.log("useOrderInvoice", data);
  console.log("orderId", orderId);

  let invoice;
  let airwallexInvoice;
  if (status === "success") {
    const airwallexPaymentData = airwallexAdminPayment.filter(
      (airwallexData: { id: string }) => airwallexData.id === router.query.id
    );

    const stripePaymentData = data.data.invoiceArray.filter(
      (invoiceData: { number: string }) => {
        return invoiceData.number === `#${router.query.id}`;
      }
    );

    if (airwallexPaymentData.length > 0) {
      airwallexInvoice = airwallexPaymentData;
    } else {
      invoice = stripePaymentData;
    }
  }

  return (
    <DashboardLayout title="Invoice page">
      <DashboardMainView>
        <h1>Hello</h1>
        {/* {status === "error" ? (
          "unable to fetch page data"
        ) : status === "loading" ? (
          <SpinnerRipple centerRipple />
        ) : invoice !== undefined ? (
          <DynamicInvoice invoice={invoice[0]} />
        ) : (
          <DynamicAirwallexInvoice invoice={airwallexInvoice[0]} />
        )} */}
      </DashboardMainView>
    </DashboardLayout>
  );
}
