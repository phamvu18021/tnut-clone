import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const GA_ID = process.env.NEXT_PUBLIC_GA || "G-B2032WPKYW";

  return (
    <Html lang="en">
      <Head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
             setTimeout(function() {(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-TDCV4KK')}, 8000);            
          `}
        </Script>
{/*         <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="`this.media='all'`
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDCV4KK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            loading="lazy"
          ></iframe>
        </noscript>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WXW3K2P"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
