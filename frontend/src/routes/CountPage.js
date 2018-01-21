import { connect } from 'dva';
import { Count } from '../components/Counter/Counter';
// import styles from './IndexPage.css';

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(Count);
