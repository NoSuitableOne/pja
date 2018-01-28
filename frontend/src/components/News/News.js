import React from 'react';
import { connect } from 'dva';
import { Col, Row } from 'antd';
import Cardpad from '../Cardpad/Cardpad';

const News = ({ news }) => {
  return (
    <Row gutter={32}>
      <Col span={8}>
        <Cardpad
          loading={news.loading}
          total={news.total}
          onChange={news.onChange}
        />
      </Col>
      <Col span={8}>
        <Cardpad
          loading={news.loading}
          total={news.total}
          onChange={news.onChange}
        />
      </Col>
      <Col span={8}>
        <Cardpad
          loading={news.loading}
          total={news.total}
          onChange={news.onChange}
        />
      </Col>
    </Row>
  );
};

News.PropTypes = {
  loading: React.PropTypes.bool,
  total: React.PropTypes.number,
  onChange: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

export default connect(mapStateToProps)(News);
