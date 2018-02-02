import React from 'react';
import { connect } from 'dva';
import { Avatar, Icon } from 'antd';
import styles from './IconBar.css';

const IconBar = ({ icon, dispatch }) => {
  function foldCtrl() {
    dispatch({ type: 'icon/fold' });
  }

  return (
    <div id={styles.iconBar} >
      <div id={styles.logo} />
      <div id={styles.user}>
        <Avatar shape="circle" size="large" icon="user">USER</Avatar>
        <div className={styles.icons} onMouseEnter={foldCtrl} onMouseLeave={foldCtrl}>
          {
            icon.fold
            &&
            <div>
              <Icon className={styles.icon} type="right" />
            </div>
          }
          {
            !icon.fold
            &&
            <div>
              <span className={styles.operationIcons}>
                <Icon className={styles.icon} type="setting" />
                <Icon className={styles.icon} type="question-circle-o" />
                <Icon className={styles.icon} type="logout" />
              </span>
              <Icon className={styles.icon} type="left" />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

IconBar.PropTypes = {};

function mapStateToProps(state) {
  return {
    icon: state.icon,
  };
}

export default connect(mapStateToProps)(IconBar);
