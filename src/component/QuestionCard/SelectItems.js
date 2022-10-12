import React from 'react';
import './SelectItems.css'
const SelectItems = ({question}) => {
  const {id, options, correctAnswer } =question;

  // console.log(correctAnswer)

  const correctAnsHandler = (option) => {
    if(correctAnswer === option){
      console.log('ha vai paise re')
    }
    else{
      console.log('vai mon kharap koito na ')
    }
  }

  return (
    <div onClick={() => correctAnsHandler(options)} className='label-aria cursor-set d-flex p-3 m-3'>
       <p className=''><input aria-label='label-aria' type="radio" value="Male" name="gender" /></p>
      <p className='p-text text-start'>{options}</p>
    </div>
  );
};

export default SelectItems;