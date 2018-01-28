import React from 'react';
import { Layout, Button, Pagination } from 'antd';
import styles from './Counter.css';

const { Header, Footer, Sider, Content } = Layout;

const Count = ({ counter, dispatch }) => {
  return (
    <div>
      <Layout className="layout">
        <Header>
          header
        </Header>
        <Sider>
          sider
        </Sider>
        <Content>
          <div className={styles.record}>Highest Record: {counter.record}</div>
          <div className={styles.current}>Current: {counter.current}</div>
          <div className={styles.buttons}>
            <Button type="default" onClick={() => { dispatch({ type: 'counter/add' }); }}>+</Button>
            <Button type="dashed" onClick={() => { dispatch({ type: 'counter/adddelay' }); }}>+ (delay)</Button>
          </div>
        </Content>
        <Footer>
          footer
        </Footer>
      </Layout>
    </div>
  );
};

Count.propTypes = {};

export { Count };
