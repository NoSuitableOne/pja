import React from 'react';
import styles from './background.css';

class NewsBg extends React.Component {
  render() {
    return (
      <div className={styles.bg} id="news-bg">
        <div className={styles.alignBanner1} />
        <div className={styles.verticalBanner1} />
      </div>
    );
  }
}

export default NewsBg;
