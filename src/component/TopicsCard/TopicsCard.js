import React from 'react';
import { Link } from 'react-router-dom';
import './TopicsCard.css'

const TopicsCard = ({topic}) => {
  const {id, name, logo, total} =topic
  // console.log(topic)
  return (
    <div>
      <div className="card p-4 w-100 border shadow">
        <div className="card-img">
          <img src={logo} alt="" className='img-fluid' />
        </div>
        <div className="card-info">
          <div className="info-box d-flex mt-4 mb-2">
          <h3> {name}</h3>
          <p className='d-flex'><span>Total: </span> <span className='itams-count'>{total}</span></p>
          </div>
          <button className='card-btn'><Link to={`${id}`}>Start Pactice</Link></button>
        </div>
      </div>
    </div>
  );
};

export default TopicsCard;