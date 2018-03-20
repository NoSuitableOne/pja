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
      <Col id={styles.logo} span={3} />
      <Col id={styles.userlogo} span={2}>
        <span>
          <Avatar shape="circle" size="large" icon="user">USER</Avatar>
        </span>
      </Col>
      <Col id={styles.username} span={5}>
        <span>你好，游客！</span>
      </Col>
      <Col id={styles.icons} span={10} >
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
                <Col span={3}>
                  <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                    <Icon className={styles.icon} type="setting" />
                  </Dropdown>
                </Col>
                <Col span={3} offset={1}>
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
