import { connect } from 'dva';
import { layoutCmp } from '../../components/layout/layout';

const newsPage = ({ layout, dispatch }) => {
  return (
    <div>

    </div>
  );
};

function mapStateToProps(state) {
  return {
    layout: state.layout,
  };
}

export default connect(mapStateToProps)(layoutCmp);
