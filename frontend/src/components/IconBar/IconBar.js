import React from 'react';
import { connect } from 'dva';
import { Avatar, Col, Modal, Icon, Row } from 'antd';
import styles from './IconBar.css';

const IconBar = ({ icon, dispatch }) => {
  let modalVisible = false;

  function setModalVisible(value) {
    modalVisible = value;
  }

  const UserModel = () => (
    <Modal
      title="Vertically centered modal dialog"
      wrapClassName="vertical-center-modal"
      visible={modalVisible}
      onOk={() => setModalVisible(false)}
      onCancel={() => setModalVisible(false)}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );

  function foldCtrl() {
    dispatch({ type: 'icon/fold' });
  }

  return (
    <Row id={styles.iconBar} type="flex" align="middle">
      <Col id={styles.logo} span={2} offset={1} />
      <Col id={styles.user} span={2} offset={1}>
        <Avatar shape="circle" size="large" icon="user">USER</Avatar>
      </Col>
      <Col id={styles.icons} span={10} offset={1}>
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
              <Row gutter={16} justify="center">
                <Col span={3}>
                  <Icon className={styles.icon} type="setting" onClick={setModalVisible(true)} />
                </Col>
                <Col span={3}>
                  <Icon className={styles.icon} type="question-circle-o" />
                </Col>
                <Col span={3}>
                  <Icon className={styles.icon} type="logout" />
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
