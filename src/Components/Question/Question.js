import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div>
            <div className='question-box'>
                <h4>Question-1: How does react work?</h4>
                <p>React is javascript library. React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.</p>
            </div>
            <div className='question-box'>
                <h4>Question-2: Write the differences between props and state?</h4>
                <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes.</p>
            </div>
            <div className='question-box'>
                <h4>Question-3: Write down the use of useEfect?</h4>
                <p>The introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effects. Since the render method is to quick to produce a side-effect one needs to use life cycle methods to observe the side effects. For example, consider updating the document title for a simple counter component to the current value. On the initial render, we set the current clicked value to 0 clicks. So, this section is coded into the componentDidMount() method which is executed only once in the component life cycle. Then we create a button to increment the count state value by one on every click. As the count value state changes, we also need to update the document title again and for that, we need to write the same piece of code in componentDidUpdate(). The componentDidupdate() method is perfect for updating the counter value at any time the state changes but the repetition of code is one of the side-effects.

</p>
            </div>
        </div>
    );
};

export default Question;