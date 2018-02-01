import React from 'react';
import { Avatar, Icon } from 'antd';
import styles from './IconBar.css';

function IconBar() {
  return (
    <div id={styles.iconBar} >
      <div id={styles.logo} />
      <div id={styles.icons}>
        <Avatar shape="circle" size="large" icon="user">USER</Avatar>
        <span>
          <Icon type="menu-unfold" />
          <Icon type="setting" />
          <Icon type="question-circle-o" />
          <Icon type="logout" />
          <Icon type="menu-fold" />
        </span>
      </div>
    </div>
  );
}

export { IconBar };
