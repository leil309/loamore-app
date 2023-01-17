import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigation from './src/navigation/AppNavigation';

const queryClient = new QueryClient({defaultOptions: {queries: {retry: 1}}});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
};

export default App;
