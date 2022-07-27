/* eslint-disable react-hooks/exhaustive-deps */
import { useAtom } from "jotai";
import { useEffect } from "react";

import InvoicePagination from "@/components/Table/InvoicePagination";
import InvoiceTableBody from "@/components/Table/InvoiceTableBody";
import InvoiceTableHead from "@/components/Table/InvoiceTableHead";
import useAdminInvoice from "@/hooks/useAdminInvoice";
import { paymentInvoiceAtom } from "@/utils/atomConfig";

interface InvoiceTableProps {
  stripeData: [];
  showPagination?: boolean;
  selectRow?: boolean;
}

export default function InvoiceTable({
  stripeData,
  showPagination = true,
  selectRow = true,
}: InvoiceTableProps) {
  const { tableInstance } = useAdminInvoice(stripeData, selectRow);
  const [, setPaymentInvoice] = useAtom(paymentInvoiceAtom);

  console.log("stripeData", stripeData);

  const {
    getTableProps,
    headerGroups,
    selectedFlatRows,
    state: { selectedRowIds },
  }: any = tableInstance;

  const selectedIds: any = [];

  useEffect(() => {
    selectedFlatRows.map((selectedFlatRow: any) =>
      selectedIds.push(selectedFlatRow.values.orderNumber)
    );
    setPaymentInvoice(selectedIds);
  }, [selectedRowIds]);

  return (
    <>
      <table className="table" {...getTableProps()}>
        <InvoiceTableHead headerGroups={headerGroups} />
        <InvoiceTableBody tableInstance={tableInstance} />
      </table>
      {showPagination && <InvoicePagination tableInstance={tableInstance} />}
      <style jsx>{`
        .table {
          width: 100%;
          padding: 0px 10px;
          background-color: white;
        }
      `}</style>
    </>
  );
}
