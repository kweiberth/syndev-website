import { useEffect } from 'react';
import MainPage from 'components/main-page';
import { useRouter } from 'next/router';

export default function Expertise(): JSX.Element {
  const router = useRouter();

  // The route /expertise is really our home page, so when we land on it, we
  // actually would rather the path be updated to home, i.e. '/'
  useEffect(() => {
    router.replace('/', undefined, { shallow: true });
  }, [router]);

  return <MainPage initialSelectedTab={'expertise'} />;
}
