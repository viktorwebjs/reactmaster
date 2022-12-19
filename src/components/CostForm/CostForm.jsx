import './CostForm.scss';
import { useState } from 'react';

const CostForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  //second version of state
  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: ''
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    //bad state
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value
    // });

    //good State
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     name: event.target.value
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // });
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costDate = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    };
    props.onSaveCostData(costDate);
    setInputName('');
    setInputAmount('');
    setInputDate('');
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
          <div className='new-cost__control'>
            <label>Name </label>
            <input type='text' value={inputName} onChange={nameChangeHandler} />
          </div>
          <div className='new-cost__control'>
            <label>Cost </label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={inputAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-cost__control'>
            <label>Date </label>
            <input type='date' value={inputDate} onChange={dateChangeHandler} />
          </div>
          <div className='new-cost__actions'>
            <button type='submit'>Add</button>
            <button> No</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CostForm;
