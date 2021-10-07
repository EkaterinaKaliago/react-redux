import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypeSelector'

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const {searchRepositories} = useActions();
  const {data, error, loading} = useTypedSelector((state) => state.repositories);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  const renderData = data.map(name => name)

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button className="button">Search</button>
      </form>
      {error && <h3>{error}</h3>} {loading && <h3>loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;