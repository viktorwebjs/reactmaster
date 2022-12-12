import TestProps2 from '../TestProps2/TestProps2';
import styles from './TestProps.module.scss';
// import { data2 } from '../../data/data.js';
import { data } from '../../data/data.js';

const TestProps = (props) => {
  return (
    <div className={styles.testProps}>
      {props.name}
      <TestProps2
        name='Test 2'
        data={data}
      />
      {/* <TestProps2 data={data2} /> */}
    </div>
  );
};

export default TestProps;
