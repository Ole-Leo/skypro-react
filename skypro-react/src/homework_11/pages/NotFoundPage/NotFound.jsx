import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main className="main">
      <h1>Not Found 😨</h1>
      <p>
        Back to <Link to="/">Homepage</Link>{' '}
      </p>
    </main>
  );
};
