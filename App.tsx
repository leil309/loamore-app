import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigation from '~/navigation/AppNavigation';
import store from '~/store';
import {Provider} from 'react-redux';
import UserLoader from '~/components/auth/UserLoader';

const queryClient = new QueryClient({defaultOptions: {queries: {retry: 1}}});

const App = () => {
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
