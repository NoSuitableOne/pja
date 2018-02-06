import React from 'react';
import { Button, Col, Dropdown, Menu, Icon, Row, Switch } from 'antd';
import styles from './SearchBar.css';

function SearchBar() {
  const menu = (
    <Menu>
      <Menu.Item key="1">中文</Menu.Item>
    </Menu>
  );

  return (
    <div id={styles.searchBar} >
      <Row type="flex" justify="center" align="middle">
        <Col className={styles.item} span={6}>
          <span>开灯</span>
          <Switch className={styles.lightBtn} defaultChecked size="small" />
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

export { SearchBar };
