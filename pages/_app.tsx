import '../reset.css';
import Head from 'next/head';
import Script from 'next/script';
import { Barlow } from 'next/font/google';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <>
      <Head>
        <title>{`SynDev Technologies`}</title>
        <meta
          name="description"
          content="Franz Weiberth, Ph.D. provides consulting in the synthesis and progression of pharmacologically active new small molecules from lab to clinic to commercial manufacturing."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#039e2f" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-169335991-1"
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-169335991-1');
            `,
          }}
        />
      </Head>
      <main className={barlow.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
