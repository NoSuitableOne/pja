import React from 'react';
import { connect } from 'dva';
import { Avatar, Checkbox, Col, Dropdown, Menu, Icon, Row } from 'antd';
import styles from './IconBar.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const IconBar = ({ icon, dispatch }) => {
  const menu = (
    <Menu>
      <Menu.Item key="preference" disabled>
        <div>开发中...</div>
      </Menu.Item>
      <Menu.Item key="info" disabled>
        <Icon type="info-circle" />个人信息
      </Menu.Item>
      <SubMenu title={<span><Icon type="smile" />喜好设置</span>} disabled>
        <MenuItemGroup title={<span>标签</span>}>
          <Menu.Item key="setting:1" disabled>
            <Checkbox>标签</Checkbox>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title={<span>数据源</span>}>
          <Menu.Item key="setting:1" disabled>
            <Checkbox>源</Checkbox>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="repo" disabled>
        <Icon type="cloud-upload" />个人仓库
      </Menu.Item>
    </Menu>
  );

  function foldCtrl() {
    dispatch({ type: 'icon/fold' });
  }

  return (
    <Row id={styles.iconBar} type="flex" align="middle">
      <Col id={styles.logo} xs={0} sm={0} md={0} lg={6} />
      <Col id={styles.userlogo} xs={6} sm={4} md={4} lg={3} offset={1}>
        <span>
          <Avatar shape="circle" size="large" icon="user">USER</Avatar>
        </span>
      </Col>
      <Col id={styles.username} xs={0} sm={0} md={8} lg={6}>
        <span>你好，游客！</span>
      </Col>
      <Col id={styles.icons} xs={12} sm={6} md={6} lg={4}>
        <Row>
          {
            !icon.fold
            &&
            <Col>
              <Icon className={styles.icon} type="right" onClick={foldCtrl} />
            </Col>
          }
          {
            icon.fold
            &&
            <Col>
              <Row gutter={8} justify="center">
                <Col xs={8} md={8} lg={6}>
                  <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                    <Icon className={styles.icon} type="setting" />
                  </Dropdown>
                </Col>
                <Col xs={10} md={8} lg={6} offset={1}>
                  <Icon className={styles.icon} type="left" onClick={foldCtrl} />
                </Col>
              </Row>
            </Col>
          }
        </Row>
      </Col>
    </Row>
  );
};

IconBar.PropTypes = {};

function mapStateToProps(state) {
  return {
    icon: state.icon,
  };
}

export default connect(mapStateToProps)(IconBar);
