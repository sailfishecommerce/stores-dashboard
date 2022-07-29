import Head from "next/head";

export default function Metatag() {
  return (
    <Head>
      {/* OG meta */}
      <meta property="og:site_name" content="Admin | Live Healthy Store HK" />
      <meta property="og:url" content="https://stores-dashboard.vercel.app/" />
      <meta
        property="og:title"
        content="Admin | Live healthy Store - Quality Australian Products - Free Shipping to HK"
      />
      <meta property="og:type" content="website" />
      <meta
        name="description"
        content="No minimum orders and free shipping to Hong Kong. Quality imported products from Australia. Choose from over 10,000 genuine health, personal care, confectionery, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, confectionery, quit smoking aids, hair colours, baby food and much more. Owned & operated by HK'ers."
      />
      <meta property="og:image:width" content="1000" />
      <meta property="og:image:height" content="1000" />
      <meta
        property="og:image"
        content="http://res.cloudinary.com/verrb-inc/image/upload/v1656462729/live-healthy-store/logo_ynasny.webp"
      />

      {/* Twitter meta */}
      <meta
        name="twitter:site"
        content="@https://stores-dashboard.vercel.app/"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://stores-dashboard.vercel.app" />
      <meta
        name="twitter:image"
        content="http://res.cloudinary.com/verrb-inc/image/upload/v1656462729/live-healthy-store/logo_ynasny.webp"
      />
      <meta
        name="twitter:description"
        content="No minimum orders and free shipping to Hong Kong. Quality imported products from Australia. Choose from over 10,000 genuine health, beauty and baby care products. Get vitamins, health and food supplements, cosmetics, quit smoking aids, hair colours, baby food and much more. Owned &amp; operated by HK'ers."
      />
      <meta
        name="twitter:title"
        content="Admin |Live Healthy Store HK - Quality Australian Products - Free Shipping to HK"
      />
      <script type="application/ld+json">
        {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://stores-dashboard.vercel.app",
            "content":"http://res.cloudinary.com/verrb-inc/image/upload/v1656462729/live-healthy-store/logo_ynasny.webp"
          }`}
      </script>
      <script type="application/ld+json">
        {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url":"https://stores-dashboard.vercel.app",
            "logo": "http://res.cloudinary.com/verrb-inc/image/upload/v1656462729/live-healthy-store/logo_ynasny.webp"
          }`}
      </script>
    </Head>
  );
}
