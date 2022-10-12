import React from 'react';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Statastics.css'
const Statastics = () => {
  
const data = [
  {
    name: 'React',
    Items: 8,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'JavaScript',
    Items: 9,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'CSS',
    Items: 8,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Git',
    Items: 11,
    pv: 3908,
    amt: 2000,
  }
];
  return (
    <div>
        <div className="title d-block">
        <h1 className='topic-header'>It is category items chart</h1>
        </div>

        
        <div className="container">
          <LineChart className='map m-auto' width={500} height={300} data={data} >
            <Line type="monotone" dataKey="Items" stroke="#82ca9d" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
           </LineChart>
        </div>
     </div>
  );
};

export default Statastics;