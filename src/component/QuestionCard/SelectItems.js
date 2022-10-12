import React from 'react';
import './SelectItems.css'
const SelectItems = ({option}) => {
  // console.log(option)
  return (
    <div className='label-aria cursor-set d-flex p-3 m-3'>
       <p className=''><input aria-label='label-aria' type="radio" value="Male" name="gender" /></p>
      <p className='p-text text-start'>{option}</p>
    </div>
  );
};

export default SelectItems;