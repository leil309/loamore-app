import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigation from '~/navigation/AppNavigation';
import store from '~/store';
import {Provider} from 'react-redux';
import UserLoader from '~/components/auth/UserLoader';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const queryClient = new QueryClient({defaultOptions: {queries: {retry: 1}}});

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <UserLoader />
        <AppNavigation />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
