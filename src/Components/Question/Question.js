import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <div className='question-box'>
                <h4>Question-1: How does react work?</h4>
                <p>React is javascript library. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
            </div>
        </div>
    );
};

export default Question;