import React from 'react';
import './Asidebar.css';
import image from '../../images/young-handsome-man-beard-wearing-260nw-1768126784.webp';


const Asidebar = () => {
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
                <h2>Add a Break</h2>
                <div className='time-break'>
                    <div className='second'>
                        <a href="/time">10s</a>
                    </div>
                    <div className='second'>
                        <a href="/time">20s</a>
                    </div>
                    <div className='second'>
                        <a href="/time">30s</a>
                    </div>
                    <div className='second'>
                        <a href="/time">40s</a>
                    </div>
                    <div className='second'>
                        <a href="time">50s</a>
                    </div>
                </div>
            </div>
            <div className='exercise-details'>
                <h2>Exercise Details</h2>
                <input className='input' type="text" placeholder='Exercise Time 200 sec'  />
                <input className='input' type="text" placeholder='Break Time 200 sec'  />
            </div>
            <button>Task Complete</button>
        </div>

    );
};

export default Asidebar;