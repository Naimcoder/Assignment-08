import React from 'react';
import './Blog.css';

const Blog = () => {
     return (
          <div>
               <h1 className='blog-title'>  My Blog </h1>
               <div className='bolg-container'>
                    <div className='blog'>
                         <h3>How does REACT work?</h3>
                         <p>React uses a declarative paradigm that makes it easier to reason about
                              your application and aims to be both efficient and flexible.
                              It designs simple views for each state in your application,
                              and React will efficiently update and render just the right component
                              when your data changes</p>
                    </div>
                    <div className='blog'>
                         <h3>What is the Difference Between State and Props?</h3>
                         <p>Props are used to pass data from one component to another.
                              The state is a local data storage
                          that is local to the component only and cannot be passed to other components.</p>
                    </div>
                    <div className='blog'>
                         <h3>What does useEffect() do?</h3>
                         <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating
                              the DOM, and timers. useEffect accepts two arguments.
                              The second argument is optional.</p>
                    </div>
                   
               </div>
          </div>
     );
};

export default Blog;