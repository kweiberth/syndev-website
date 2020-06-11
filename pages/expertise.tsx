import { useEffect } from 'react';
import MainPage from 'components/main-page';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, []);
  return <MainPage initialSelectedTab={'expertise'} />;
}
