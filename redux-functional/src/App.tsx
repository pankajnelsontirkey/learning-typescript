import { Provider } from 'react-redux';

import RepositoriesList from './components/RepositoriesList';
import { store } from './state/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <h1>Search for a package</h1>
        </div>
        <RepositoriesList />
      </Provider>
    </>
  );
}

export default App;
