import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import './QuestionCard.css';
import SelectItems from './SelectItems';
const Question = ({question}) => {
   const options = question.options;
   const ans =question.correctAnswer;
  // const {id, correctAnswer, question, options} = question
  console.log(question)
  // console.log(question)
  return (
    <div className='border p-4 m-5'>
     <div className="q-top-header d-flex">
     <h2>Question:</h2>
      <div className="icon">
        <EyeIcon className="w-25"/>
      </div>

     </div>
      <h4 className='text-start'> {question.question}</h4>
      <div className="option-select-container">

      <div className="select-option-container d-md-grid">
      {
          options.map(option => <SelectItems
             key={question.id}
             option ={option}
             ></SelectItems>)
        }
      </div>
      </div>
    </div>
  );
};

export default Question;