import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { blogFormDataType } from "@/typings";

// ui-state
export const appLoadingAtom = atom(false);
export const countryAtom = atom<{ country: string } | null>(null);

// admin-auth
export const adminAuthAtom = atomWithStorage<any>("adminAuth", null);

// admin-invoice
export const loadingInvoiceAtom = atom(false);
export const paymentInvoiceAtom = atom([]);

// airwallex paymentArray
export const airwallexAdminPaymentAtom = atomWithStorage<any>(
  "airwallexAdminPaymentAtom",
  []
);

export type colorType = Array<{
  colorCode: string;
  colorKey: string;
  colorName: string;
}>;

// edit color
export const siteColorsAtom = atom<colorType>([]);

// blog author
export const blogAuthorFormAtom = atom<blogFormDataType>({
  dbNode: "articles/blog/blog-author",
  data: {
    authorName: "",
    aboutAuthor: "",
  },
});

type selectStoreAtomType =
  | null
  | "livehealthy"
  | "docsupplies"
  | "sailfish"
  | "luxury_of_australia";

//
export const selectStoreAtom = atom<selectStoreAtomType>(null);
