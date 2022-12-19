import Costs from './components/Costs/Costs';
import { costs } from '../src/shared/data';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const addCostHandler = (cost) => {
    console.log(cost);
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
