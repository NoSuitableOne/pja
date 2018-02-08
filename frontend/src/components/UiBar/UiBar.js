import React from 'react';
import { connect } from 'dva';
import { Button, Col, Dropdown, Menu, Icon, Row, Switch } from 'antd';
import styles from './UiBar.css';

function UiBar({ ui, dispatch }) {
  const menu = (
    <Menu>
      <Menu.Item key="1">中文</Menu.Item>
    </Menu>
  );

  function lightSwitch() {
    dispatch({ type: 'ui/light' });
  }

  return (
    <div id={styles.searchBar} >
      <Row type="flex" justify="center" align="middle">
        <Col className={styles.item} span={6}>
          <span>开灯</span>
          <Switch className={styles.lightBtn} size="small" checked={ui.light} onChange={lightSwitch} />
        </Col>
        <Col className={styles.item} span={6}>
          <span>帮助</span>
          <Icon className={styles.questionIcon} type="question-circle-o" />
        </Col>
        <Col className={styles.item} span={10}>
          <span>语言</span>
          <Dropdown disabled overlay={menu}>
            <Button className={styles.languageSelect} size="small">
              中文
              <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
  };
}

export default connect(mapStateToProps)(UiBar);
