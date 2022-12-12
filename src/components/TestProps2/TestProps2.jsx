import styles from './TestProps2.module.scss';

const TestProps2 = (props) => {
  // let data = props.data;
  // let data = props.data.li;

  return (
    <div className={styles.testProps2}>
      {/* 
      //first variant
       */}
      {props.name}
      <div>
        <ul>
          {props.data.map((item, i) => (
            <li key={i}>
              {item.link} {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* second variant */}
      {/* {props.data.name}
      <div>
        <ul>
          {data.map((item, i) => (
            <li key={i}>
              {item.link} {item.text}
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default TestProps2;
