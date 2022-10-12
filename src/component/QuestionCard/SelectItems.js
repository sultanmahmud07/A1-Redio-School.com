import React from 'react';
import './SelectItems.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SelectItems = ({option, question}) => {
  const {correctAnswer} =question;
  // console.log(question)
  // console.log(option)


  const selectHeandlerAdd = (option) =>{
    // console.log(option)
    if(correctAnswer === option){
      toast.success('🦄 Wow! Your ans is right!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

    }
    else{
      toast.warn('your answer is wrong!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  return (
    <div onClick={() => selectHeandlerAdd(option)} className='label-aria cursor-set d-flex p-3 m-3'>
       <p className=''><input aria-label='label-aria' type="radio" value="Male" name="gender" /></p>
      <p className='p-text text-start'>{option}</p>
      <ToastContainer />
    </div>
  );
};

export default SelectItems;