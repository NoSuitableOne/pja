import { connect } from 'dva';
import { layoutCmp } from '../../components/layout/layout';

function mapStateToProps(state) {
  return {
    layout: state.layout,
  };
}

export default connect(mapStateToProps)(layoutCmp);
