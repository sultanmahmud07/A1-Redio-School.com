import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicsCard from '../component/TopicsCard/TopicsCard';
import './Topics.css';
const Topics = () => {
  const allTopics = useLoaderData();
  const topics = allTopics.data
  
  return (
    <div>
      <div className="title d-block">
      <h1 className='topic-header'>These are tropics</h1>
      </div>
      <div className="card-container container">
      {
        topics.map(topic => <TopicsCard
        key={topic.id}
        topic={topic}
        ></TopicsCard>)
      }
      </div>
    </div>
  );
};

export default Topics;