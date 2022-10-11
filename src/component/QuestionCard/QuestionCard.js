import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import './QuestionCard.css';
const Question = ({question}) => {
   const options = question.options;
   const ans =question.correctAnswer;
  // const {id, correctAnswer, question, options} = question
  // console.log(question)
  console.log(ans)
  return (
    <div className='border p-4 m-5'>
     <div className="q-top-header d-flex">
     <h2>Question No-1</h2>
      <div className="icon">






        
      <EyeIcon className="w-25"/>
      </div>
     </div>
      <h3> {question.question}</h3>
      <div className="option-select-container">


























        
        {
          options.map(option => <div className='border text-primary'>
           <p> {option}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Question;