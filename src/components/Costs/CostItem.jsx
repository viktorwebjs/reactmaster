// import { useState } from 'react';
import Card from '../UI/Card';
import CostDate from './CostDate';

import './CostItem.scss';

const CostItem = (props) => {
  // const [description, setDescription] = useState(props.description);

  // const changeDesHandler = () => {
  //   setDescription('New text');
  // };
  return (
    <>
      <Card className='cost_item'>
        <CostDate date={props.date} />
        <div className='cost_item__description'>
          <h2>{props.description}</h2>
          <div className='cost_item__price'>${props.amount}</div>
        </div>
        {/* <button onClick={changeDesHandler}>Change</button> */}
      </Card>
    </>
  );
};
export default CostItem;
