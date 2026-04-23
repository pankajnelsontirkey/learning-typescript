import { useState, type FC, type SubmitEventHandler } from 'react';

import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: FC = () => {
  const [keyword, setKeyword] = useState('');
  const { searchedRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const submitHandler: SubmitEventHandler = (e) => {
    e.preventDefault();

    searchedRepositories(keyword);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button>Search</button>
      </form>
      {error ? <h3>{error}</h3> : null}
      {loading ? <h3>Loading...</h3> : null}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
