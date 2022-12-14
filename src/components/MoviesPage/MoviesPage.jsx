import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import {Circles} from 'react-loader-spinner';
import slugify from 'slugify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as API from '../../api/API';
import s from './MoviesPage.module.css';
const slug = string => slugify(string, { replacement: '_', lower: true });
const MoviesPage = () => {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams({});
  const [inputValue, setInputValue] = useState('');

  const searchQuery = searchParams.get('query');

  const [searchingMovies, setSearchingMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    setStatus('pending');

    API.fetchMoviesByKeyword(searchQuery)
      .then(response => {
        if (response.results.length !== 0) {
          setSearchingMovies(response.results);
          setStatus('resolved');
        } else {
          toast.error('No movies found');
          setStatus('idle');
        }
      })
      .catch(error => setError(error), setStatus('rejected'));
  }, [searchQuery]);

  const handleChange = e => {
    const { value } = e.currentTarget;
    setInputValue(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      toast.info('The input field cannot be empty');
      return;
    }

    setSearchParams({ query: `${inputValue}` });

    setInputValue('');
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {status === 'pending' && (
        <Circles
          type="Circles"
          color="#2196f3"
          height={70}
          width={70}
          timeout={2000}
        />
      )}
      {status === 'resolved' && (
        <ul className={s.moviesList}>
          {searchingMovies.map(({ id, original_title }) => (
            <li key={id} className={s.listItem}>
              <Link
                to={`./${slug(`${original_title}_${id}`)}`}
                state={{ from: { location, label: 'Go back to search page' } }}
              >
                {original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {status === 'rejected' && <h1>{error && error.message} </h1>}
    </>
  );
};

export default MoviesPage;
