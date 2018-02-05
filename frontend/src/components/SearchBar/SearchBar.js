import React from 'react';
import { Button, Col, Dropdown, Menu, Icon, Row, Switch } from 'antd';
import styles from './SearchBar.css';

function SearchBar({ dispatch }) {
  const menu = (
    <Menu>
      <Menu.Item key="1">中文</Menu.Item>
    </Menu>
  );

  return (
    <div id={styles.searchBar} >
      <Row>
        <Col className={styles.item} span={8}>
          <span>语言</span>
          <Dropdown disabled overlay={menu}>
            <Button className={styles.languageSelect}>
              中文
              <Icon type="down" />
            </Button>
          </Dropdown>
        </Col>
        <Col className={styles.light} span={8}>
          <span>开灯</span>
          <Switch className={styles.lightBtn} defaultChecked />
        </Col>
        <Col className={styles.item} span={8}>
          <span>帮助</span>
          <Icon className={styles.questionIcon} type="question-circle-o" />
        </Col>
      </Row>
    </div>
  );
}

export { SearchBar };
