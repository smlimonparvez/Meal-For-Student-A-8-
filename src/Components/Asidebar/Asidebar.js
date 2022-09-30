import React from 'react';
import './Asidebar.css';
import image from '../../images/young-handsome-man-beard-wearing-260nw-1768126784.webp';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';

const addMoreTime1 = () => {
    const addTime = document.getElementById('extra-time1');
    const time = addTime.innerText;
    const inputField = document.getElementById('input-field');
    inputField.value = time;
}

const addMoreTime2 = () => {
    const addTime = document.getElementById('extra-time2');
    const time = addTime.innerText;
    const inputField = document.getElementById('input-field');
    inputField.value = time;
}

const addMoreTime3 = () => {
    const addTime = document.getElementById('extra-time3');
    const time = addTime.innerText;
    const inputField = document.getElementById('input-field');
    inputField.value = time;
}

const addMoreTime4 = () => {
    const addTime = document.getElementById('extra-time4');
    const time = addTime.innerText;
    const inputField = document.getElementById('input-field');
    inputField.value = time;
}

const addMoreTime5 = () => {
    const addTime = document.getElementById('extra-time5');
    const time = addTime.innerText;
    const inputField = document.getElementById('input-field');
    inputField.value = time;
}

const Asidebar = (props) => {
    const {card1} = props;
    // console.log(card1);
    let total =0;
    for(const product of card1){
        total = total + product.time_required;
        const inputField2 =document.getElementById('input-field2');
        inputField2.value = total+' min';
    }
    return (
        <div>
            <div className='man-info'>
                <img src={image} alt="" />
                <div>
                    <h4>David Warner</h4>
                    <p>Californiya, USA</p>
                </div>
            </div>
            <div className='man-info2'>
                <div>
                    <h3>65<span>Kg</span></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.7</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>25<span>Year</span></h3>
                    <p>Age</p>
                </div>
            </div>
            <div className='break-container'>
                <h2>Add More Break</h2>
                <div className='time-break'>
                    <div>
                        <button onClick={addMoreTime1} id='extra-time1' className='time-btn'>10 <span>s</span></button>
                    </div>
                    <div>
                        <button onClick={addMoreTime2} id='extra-time2' className='time-btn'>20 <span>s</span></button>
                    </div>
                    <div>
                        <button onClick={addMoreTime3} id='extra-time3' className='time-btn'>30 <span>s</span></button>
                    </div>
                    <div>
                        <button onClick={addMoreTime4} id='extra-time4' className='time-btn'>40 <span>s</span></button>
                    </div>
                    <div>
                        <button onClick={addMoreTime5} id='extra-time5' className='time-btn'>50 <span>s</span></button>
                    </div>
                </div>
            </div>
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <input id='input-field' className='input' type="text" placeholder='Add More Break Time' />
                <input id='input-field2' className='input' type="text" placeholder='Total Break Time' />
            </div>
            <div className='btn-center'>
                <button className='btn2'>Task Complete</button>
            </div>
        </div>

    );
};

export default Asidebar;