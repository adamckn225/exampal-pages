import React,  { useState } from 'react';
import './Reviewpagebutton.css';

function Reviewpagebutton () {
    const [Active0, IsActive0] = useState(false);
    const [Active1, IsActive1] = useState(false);
    const [Active2, IsActive2] = useState(false);
    const [Active3, IsActive3] = useState(false);

    return ( 
        <div>
            <div className='header0'>
                <div className='header0pic'></div>
                <div className='header0arrow'></div>
                <div className="header0button" onClick={(e) =>IsActive0(!Active0)}>
                    Date 
                </div>
                    {Active0 &&(
                        <div className='header0content'></div>
                    )}
            </div>

            <div className='header1' onClick={(e) =>IsActive1(!Active1)}>
                <div className="header1button" onClick={(e) =>IsActive1(!Active1)}>
                    Difficulty 
                </div>
            </div>
                <div className='header1arrow' onClick={(e) =>IsActive1(!Active1)}></div>
                <div className='header1pic' onClick={(e) =>IsActive1(!Active1)}></div>
                    {Active1 &&(
                        <div className='header1content'>
                            <input type="radio" className='header1item'/>Level 1<br/>
                            <input type="radio" className='header1item'/>Level 2<br/>
                            <input type="radio" className='header1item'/>Level 3<br/>
                            <input type="radio" className='header1item'/>Level 3+<br/>
                        </div>
                    )}


            <div className='header2' onClick={(e) =>IsActive2(!Active2)}>
                <div className="header2button" onClick={(e) =>IsActive2(!Active2)}>
                    Question type
                </div>
            </div>
                <div className='header2pic' onClick={(e) =>IsActive2(!Active2)}></div>
                    <div className='header2arrow' onClick={(e) =>IsActive2(!Active2)}></div>
                    {Active2 &&(
                        <div className='header2content'>                         
                            <input type="radio" className='header2item'/>Multiple Choice<br/>
                            <input type="radio" className='header2item'/>Short Question<br/>
                            <input type="radio" className='header2item'/>Long Question
                        </div>
                    )}
        

            <div className="header3" onClick={(e) =>IsActive3(!Active3)}>
                <div className='header3button' onClick={(e) =>IsActive3(!Active3)}>
                    Add filter 
                </div>
            </div>
                <div className='header3pic' onClick={(e) =>IsActive3(!Active3)}></div>
                    {Active3 &&(
                        <div className='header3content'>
                            <input type="radio" className="header3item"/>Ascending order (Difficulty level)<br/>
                            <input type="radio"className="header3item"/>Descending order (Difficulty level)
                        </div>
                    )}
            
        </div>
    )
}
 
export default Reviewpagebutton;