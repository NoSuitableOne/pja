import React from 'react';
import { connect } from 'dva';
import { Button, Col, Dropdown, Menu, Icon, Row, Switch } from 'antd';
import styles from './UiBar.css';
import CONSTANT from '../../constant';

function UiBar({ ui, dispatch }) {
  const menu = (
    <Menu>
      <Menu.Item key="1">中文</Menu.Item>
    </Menu>
  );

  function switchHandler() {
    if (!ui.switch.state) {
      dispatch({ type: 'ui/filterOn' });
    } else {
      dispatch({ type: 'ui/filterOff' });
    }
  }

  return (
    <div id={styles.searchBar} >
      <Row type="flex" justify="center" align="middle">
        <Col className={styles.item} span={6} push={2}>
          <span>显示收藏</span>
          <Switch
            className={styles.switch}
            size="small"
            checked={ui.switch.state}
            loading={ui.switch.isLoading}
            onChange={switchHandler}
          />
        </Col>
        <Col className={styles.item} span={7} push={2}>
          <span>语言</span>
          <Dropdown disabled overlay={menu}>
            <Button className={styles.languageSelect} size="small">
              中文
              <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
        <Col className={styles.item} span={4} push={2}>
          <span>版本号 {CONSTANT.version}</span>
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
