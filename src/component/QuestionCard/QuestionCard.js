import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import './QuestionCard.css';
import SelectItems from './SelectItems';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Question = ({question}) => {
  const options = question.options;
  const ans =question.correctAnswer;
  const [anss, setAnss] = useState([]);

  const eysHendler =(question) =>{
    const newAnss = question.correctAnswer
    setAnss(newAnss)
    // console.log(question.correctAnswer)
   }



  return (
    <div className='border shadow p-4 m-5'>
     <div className="q-top-header d-flex">
     <h2>Question:</h2>
     <div className="eys-container"><span className='ans-tag'>Ans:-</span> <span className='currect-ans'>{anss}</span></div>
      <div className="icon">
        <EyeIcon onClick={() => eysHendler(question)} className="eys-btn w-25"/>
      </div>

     </div>
      <h4 className='text-start'> {question.question}</h4>
      <div className="option-select-container">

      <div className="select-option-container d-md-grid">
      {
          options.map(option => <SelectItems
             key={question.id}
             option ={option}
             question ={question}
             ></SelectItems>)
        }
      </div>
      </div>
      <ToastContainer />
    </div>
    
  );
};

export default Question;