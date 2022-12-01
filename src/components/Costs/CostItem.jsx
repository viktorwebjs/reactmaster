import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.scss';

const CostItem = (props) => {
  return (
    <>
      <Card className='cost_item'>
        <CostDate date={props.date} />
        <div className='cost_item__description'>
          <h2>{props.description}</h2>
          <div className='cost_item__price'>${props.amount}</div>
        </div>
      </Card>
    </>
  );
};
export default CostItem;