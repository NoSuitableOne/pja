import React from 'react';
import { Button, DatePicker } from 'antd';
import styles from './SearchBar.css';

function SearchBar({ dispatch }) {
  return (
    <div id={styles.searchBar} >
      <DatePicker />
      <Button
        icon="search"
        onClick={() => { dispatch({ type: 'news/change' }); }}
      />
    </div>
  );
}

export { SearchBar };
