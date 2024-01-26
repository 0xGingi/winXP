import React from 'react';
import Main from './Main';

export function Google({ route = 'main', query = '', onSearch, goMain }) {
  if (route === 'main') return <Main onSearch={onSearch} />;
}

export default Google;
