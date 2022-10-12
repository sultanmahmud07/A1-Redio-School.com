import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../QuestionCard/QuestionCard';

const CardDetails = () => {
  const topicDetails = useLoaderData()
  const {name, logo} = topicDetails.data;
  const questions =topicDetails.data.questions
  // console.log(topicDetails)
  return (
    <div>
        <h1>Quiz of {name}!!</h1>
        <div className="container">
        {
          questions.map(question => <Question
          key={question.id}
          question ={question}
          ></Question>)
        }
        </div>
    </div>
  );
};


export default CardDetails;