import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
      {directors.map(director => <div><h3>{director.name}</h3> {director.movies.map(movie => <ul>{movie}</ul>)}</div>)}
      </ul>
    </div>
  );
}

export default Directors
