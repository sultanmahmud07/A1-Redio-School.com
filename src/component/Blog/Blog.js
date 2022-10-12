import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <div className="title d-block">
         <h1 className='topic-header'>This is Blog!!!</h1>
      </div>
      <div className="container">
        <div className="single-question">
          <div className="title-wrapper">
            <div className="q-title">
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
          <p className='q-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat adipisci voluptate voluptatibus reprehenderit officia aut modi natus quo eligendi. Natus, cupiditate? Harum aperiam nulla rerum ratione consectetur perferendis adipisci aliquam.</p>
        </div>
        <div className="single-question">
          <div className="title-wrapper">
            <div className="q-title">
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
          <p className='q-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat adipisci voluptate voluptatibus reprehenderit officia aut modi natus quo eligendi. Natus, cupiditate? Harum aperiam nulla rerum ratione consectetur perferendis adipisci aliquam.</p>
        </div>
        <div className="single-question">
          <div className="title-wrapper">
            <div className="q-title">
              <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            </div>
          </div>
          <p className='q-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat adipisci voluptate voluptatibus reprehenderit officia aut modi natus quo eligendi. Natus, cupiditate? Harum aperiam nulla rerum ratione consectetur perferendis adipisci aliquam.</p>
        </div>
      </div>

    </div>
  );
};

export default Blog;