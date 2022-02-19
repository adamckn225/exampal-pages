import './Mostrecent.css';
import React,  { useState } from 'react';

function MostrecentBar () {
    const [mostactive, ismostactive] = useState(false);
    return ( 
        <div>
            <div className="mostrecentbar0">Date</div>
            <div className="mostrecentbar1">Question</div>
                <div className="mostrecentbar2" onClick={(e) =>ismostactive(!mostactive)}>
                    Expand all questions
                    </div>
                        {mostactive &&(
                            <div className='mostrecentcontent'>
                                <div className='mostrecentitem0'>
                                <div className="mostrecentlistdate">Sep<br/>1</div>
                                <div className="mostrecentlistpic"></div>
                                <div className="mostrecentlistq">How many apples were there? XXXXXXXXXXXXXX YYYYYYYYYYYYY</div>
                            </div>
                            <div className='mostrecentitem1'>
                                <div className="mostrecentlistdate">Sep<br/>1</div>
                                <div className="mostrecentlistpic"></div>
                                <div className="mostrecentlistq">How many apples were there? XXXXXXXXXXXXXX YYYYYYYYYYYYY</div>
                            </div>
                            <div className='mostrecentitem2'>
                                <div className="mostrecentlistdate">Sep<br/>1</div>
                                <div className="mostrecentlistpic"></div>
                                <div className="mostrecentlistq">How many apples were there? XXXXXXXXXXXXXX YYYYYYYYYYYYY</div>
                            </div>
                            </div>
                        )}     
                
        </div>
     );
}
 
export default MostrecentBar;