import { useEffect } from 'react';
import '../reset.css';

export default function App({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  useEffect(() => {
    import('webfontloader').then((Webfont) =>
      Webfont.load({
        google: {
          families: ['Fira Sans:400,500,600,700'],
        },
      }),
    );
  }, []);

  return <Component {...pageProps} />;
}
