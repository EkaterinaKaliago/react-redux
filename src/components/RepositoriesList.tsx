import { useState } from 'react';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="search"/>
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;