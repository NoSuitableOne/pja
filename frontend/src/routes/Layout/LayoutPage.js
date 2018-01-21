import React, { Component } from 'react';
import { Layout, Button, Avatar, Row, Col, Icon, DatePicker } from 'antd';
import Cardpad from '../../components/Cardpad';
import styles from './Layout.css';

const { Header, Footer, Content } = Layout;

class LayoutPage extends Component {
  render() {
    return (
      <div>
        <Layout className={styles.framework}>
          <Header>
            <Row id={styles.header} type="flex" justify="space-between" style={{ backgroundColor: 'yellow' }}>
              <Col id={styles.iconBar} span={8} style={{ backgroundColor: 'green' }}>
                <div id={styles.logo} />
                <Avatar shape="circle" size="large" icon="user">USER</Avatar>
                <div style={{ width: '200px', height: '100%', backgroundColor: 'white', display: 'inline-block', marginLeft: '20px' }}>
                  <Icon type="menu-unfold" style={{ fontSize: 48, color: '#08c' }} />
                  <Icon type="setting" />
                  <Icon type="question-circle-o" />
                  <Icon type="logout" />
                  <Icon type="menu-fold" />
                </div>
              </Col>
              <Col id={styles.searchBar} span={6} style={{ backgroundColor: 'pink' }}>
                <DatePicker />
                <Button icon="search" />
              </Col>
            </Row>
          </Header>
          <Content className={styles.contentBackground}>
            <Row gutter={32}>
              <Col span={8}>
                <Cardpad />
              </Col>
              <Col span={8}>
                <Cardpad />
              </Col>
              <Col span={8}>
                <Cardpad />
              </Col>
            </Row>
          </Content>
          <Footer id={styles.footer}>
            <span>NoSuitableOne‘s product
              <a href="/#">NoSuitableOne@github.com</a>
            </span>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default LayoutPage;
