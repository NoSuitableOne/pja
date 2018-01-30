import React from 'react';
import { connect } from 'dva';
import { Col, Row } from 'antd';
import Cardpad from '../Cardpad/Cardpad';

const News = ({ news }) => {
  const CardpadElement = (news.origin).map((ele, idx) => (
    <Col key={idx} span={8}>
      <Cardpad
        loading={ele.state.loading}
        title={ele.title}
        total={ele.total}
        passage={ele.passage}
      />
    </Col>
  ));

  return (
    <Row gutter={32}>
      {CardpadElement}
    </Row>
  );
};

News.PropTypes = {
  origin: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

export default connect(mapStateToProps)(News);
