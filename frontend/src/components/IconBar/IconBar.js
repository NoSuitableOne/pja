import React from 'react';
import { Avatar, Icon } from 'antd';
import styles from './IconBar.css';

function IconBar() {
  return (
    <div id={styles.logo} >
      <div id={styles.icons}>
        <Avatar shape="circle" size="large" icon="user">USER</Avatar>
        <Icon type="menu-unfold" style={{ fontSize: 48, color: '#08c' }} />
        <Icon type="setting" />
        <Icon type="question-circle-o" />
        <Icon type="logout" />
        <Icon type="menu-fold" />
      </div>
    </div>
  );
}

export { IconBar };
