import CostItem from './CostItem';
import './Costs.scss';
import Card from './Card';

export default function Costs(props) {
  return (
    <Card className='costs'>
      <CostItem
        date={props.costs[0].date}
        description={props.costs[0].description}
        amount={props.costs[0].amount}
      />
      <CostItem
        date={props.costs[1].date}
        description={props.costs[1].description}
        amount={props.costs[1].amount}
      />
    </Card>
  );
}
