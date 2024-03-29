import { formatStoreName } from "./formatAlgoliaDetails";

/* eslint-disable dot-notation */
export default function toShopifyProductModel(
  product: any,
  productImages: any[],
  activeStore: string
) {
  const productData = {
    name: product["Title"],
    sale_price: product["Variant Price"],
    active: true,
    type: "standard",
    flags: product["Flags"],
    customizable: true,
    product_type: product["Product Type"],
    description: product["Product Description"],
    meta_description: product["Metafield: description_tag [string]"],
    meta_title: product["Metafield: title_tag [string]"],
    review_rating: product["Reviews"],
    rating: product["Rating"],
    sale: true,
    currency: "HKD",
    delivery: "shipment",
    requires_shipping: product["Variant Requires Shipping"],
    sku: product["Variant SKU"],
    tags: product["Tags"],
    vendor: product["Vendor"],
    rrp: product["CWH RRP"],
    new_sailfish: product["New Sailfish"],
    margin: product["Margin"],
    airtable_group: "toShopify",
    product_categories: [product["Type"], product["Flags"]],
    select_store: formatStoreName(activeStore),
    compare_at_price: product["Variant Compare At Price"],
    price: product["Variant Compare At Price"],
    product_image: productImages,
    images: productImages,
    image_alt_text: [
      product["Image 1 Alt Text"],
      product["Image 2 Alt Text"],
      product["Image 3 Alt Text"],
      product["Image 4 Alt Text"],
      product["Image 5 Alt Text"],
      product["Image 6 Alt Text"],
      product["Image 7 Alt Text"],
      product["Image 8 Alt Text"],
      product["Image 9 Alt Text"],
      product["Image 10 Alt Text"],
    ],
    product_type_2: product["Type"],
    weight_unit: product["Variant Weight Unit"],
    general_information: product["Body HTML"],
    product_seo_title: product["Product SEO Title"],
    product_seo_description: product["Product SEO Description"],
    image_width: product["Image Width"],
    image_height: product["Image Height"],
  };

  return productData;
}
