import SigninBar from "./Bar/SigninBar";
import { Link } from "react-router-dom";
import './SignupPage.css';
import { useState } from 'react';

function SignupPage ({selected, setSelected}) {
    const [Activedate0, IsActivedate0] = useState(false);
    const [Activedate1, IsActivedate1] = useState(false);
    const [Activedate2, IsActivedate2] = useState(false);
    const months = ["Jan","Feb","March","April","May","June"];
    const days = ["1", "2","3","4","5","6","7","8","9","10","11","12"];
    const years = ["2013","2012","2011","2010","2009","2008","2007"];

    return ( 
        <div>
            <SigninBar/>
            <div className="signinbarbg0"></div>
            <div className="signinbarbg1">
                <div className="signinbarbg1text0">
                    Lorem ipsum dolor sit amet
                </div>
                <div className="signinbarbg1text1">
                    habitant aliquam, risus enim diam. Blandit sit cras adipiscing neque suscipit et suscipit posuere orci ornare.
                </div>
                <div className="signinbarbg1pic"></div>            
                </div>
                    <div className="signinbarbg2">
                        <div className="signinbarbg2text0">I am a...</div>
                    <div className="signinbarbg2button0">
                        <div className="signinbarbg2button0text">
                            Student
                        </div>   
                    </div>
                <div className="signinbarbg2button1">
                    <div className="signinbarbg2button0text">Parent</div>
                </div>
                <div className="signinbarbg2button2">Date of birth</div>

                <div className="date0">
                    <div className="date0button" onClick={(e) =>IsActivedate0(!Activedate0)}>
                        <div className="date0text">{selected}</div>
                        <div className="date0arrow"></div>
                    </div>
                            {Activedate0 &&(
                                <div className='date0content'>
                                    {months.map((months) => (
                                        <div onClick={(e) => {setSelected(months);IsActive0(false);}}
                                            className='date0item'>{months}</div>
                                    ))}
                                </div>                        
                            )}
                </div>

                <div className="date1">
                    <div className="date1button" onClick={(e) =>IsActivedate1(!Activedate1)}>
                    <div className="date0text">Day</div>
                        <div className="date1arrow"></div>
                    </div>
                        {Activedate1 &&(
                            <div className='date1content'>
                                {days.map((days) => (
                                    <div className='date1item'>{days}</div>
                                ))}
                            </div>                        
                        )}
                </div>

                <div className="date2">
                    <div className="date2button" onClick={(e) =>IsActivedate2(!Activedate2)}>
                    <div className="date0text">Year</div>
                    <div className="date2arrow"></div>
                    </div>
                        {Activedate2 &&(
                            <div className='date2content'>
                                {years.map((years) => (
                                    <div className='date2item'>{years}</div>
                                ))}
                            </div>                        
                        )}
                </div>

                <Link to="/SignupPage2"><div className="signinbarbg3">
                    <div className="signinbarbg3text0">Sign up by choosing a username</div>
                </div></Link>
                <Link to ="/"><div className="signinbarbg2button3">
                    Already have an account?
                </div></Link>
            </div>
        </div>
     );
}
 
export default SignupPage;