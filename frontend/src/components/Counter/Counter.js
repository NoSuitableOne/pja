import React from 'react';
import { Button } from 'antd';
import styles from './Counter.css';

const Count = ({ counter, dispatch }) => {
  return (
    <div>
      <div className={styles.record}>Highest Record: {counter.record}</div>
      <div className={styles.current}>Current: {counter.current}</div>
      <div className={styles.buttons}>
        <Button type="default" onClick={() => { dispatch({ type: 'counter/add' }); }}>+</Button>
        <Button type="dashed" onClick={() => { dispatch({ type: 'counter/adddelay' }); }}>+ (delay)</Button>
      </div>
    </div>
  );
};

Count.propTypes = {};

export { Count };
