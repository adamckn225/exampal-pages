import SigninBar from "./Bar/SigninBar";
import './SignupPage.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function SignupPage4 (){
    const [genderactive, setgenderactive] = useState(false);
    const [schoolactive, setschoolactive] = useState(false);
    return ( 
        <div>
            <SigninBar/>
            <div className="signinbarbg4"></div>
            <div className="signinbarbg1">
                <div className="signinbarbg1text0">Lorem ipsum dolor sit amet</div>
                <div className="signinbarbg1text1">
                    habitant aliquam, risus enim diam. Blandit sit cras adipiscing neque suscipit et suscipit posuere orci ornare.
                </div>
                <div className="signinbarbg1pic"></div>            
            </div>
            <div className="signinbarbg2">
                <div className="signinbarbg2text4">First Name</div>
                <input type="text" className="signinbarbg2bar0" />
                <div className="signinbarbg2text5">Last Name</div>
                <input type="text" className="signinbarbg2bar1" />
                <div className="signinbarbg2text6">Preferred Name</div>
                <input type="text" className="signinbarbg2bar2" />
                
                <div className="signinbarbg2text7">Gender</div>
                    <div className="gender">
                        <div className="genderbutton" onClick={(e) =>setgenderactive(!genderactive)}>
                            Choose one 
                        </div>
                            {genderactive &&(
                                <div className='gendercontent'>
                                    <div className='genderitem'>Male</div>
                                    <div className='genderitem'>Female</div>
                                    <div className='genderitem'>Prefer not to say</div>
                                </div>
                            )}
                    </div>

                <div className="signinbarbg2text8">School</div>
                    <div className="school">
                        <div className="schoolbutton" onClick={(e) =>setschoolactive(!schoolactive)}>
                            Choose one 
                        </div>
                            {schoolactive &&(
                                <div className='schoolcontent'>
                                    <div className='schoolitem'>Diocesan Boys' School</div>
                                    <div className='schoolitem'>Lorem ipsum dolor sit amet</div>
                                    <div className='schoolitem'>Lorem ipsum dolor sit amet</div>
                                    <div className='schoolitem'>Lorem ipsum dolor sit amet</div>
                                    <div className='schoolitem'>Lorem ipsum dolor sit amet</div>
                                    <div className='schoolitem'>Lorem ipsum dolor sit amet</div>
                                </div>
                            )}
                    </div>

                <div className="signinbarbg2text9">Email address</div>
                <input type="text" className="signinbarbg2bar3" placeholder="sam@samcart.com"/>
                <div className="signinbarbg2text10">Password</div>
                <input type="text" className="signinbarbg2bar4" placeholder="Enter password (8 charcters minimum)" />
                <div className="signinbarbg2text11">Confirm password</div>
                <input type="text" className="signinbarbg2bar5" placeholder="Re-enter password"/>
                <Link to="/Dashboard"><button className="signinbarbg2button6">Sign up</button></Link>
                <Link to="/"><div className="signinbarbg2text12">Already have an account?</div></Link>
            </div>
        </div>
     );
}
 
export default SignupPage4; 