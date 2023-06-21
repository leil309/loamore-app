import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigation from '~/navigation/AppNavigation';
import store from '~/store';
import {Provider} from 'react-redux';
import UserLoader from '~/components/auth/UserLoader';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import FilterLoader from '~/components/filter/FilterLoader';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://f78311925f394803a8481850f393f9a7@o4505267508346880.ingest.sentry.io/4505395851427840',
});

const queryClient = new QueryClient({defaultOptions: {queries: {retry: 1}}});

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserLoader />
        <FilterLoader />
        <AppNavigation />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
