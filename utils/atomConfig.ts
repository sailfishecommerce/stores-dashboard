import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import type { blogFormDataType } from "@/typings";
import { applicationDetailsType } from "@/hooks/useAlgoliaIndex";

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
export const appDetailsAtom = atom<applicationDetailsType>({
  ID: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_APP_ID}`,
  ADMIN_API_KEY: `${process.env.NEXT_PUBLIC_ALGOLIA_ADMIN_API_KEY}`,
  INDEX_NAME: `${process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME}`,
});
