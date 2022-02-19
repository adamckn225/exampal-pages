import SigninBar from "./Bar/SigninBar";
import './SignupPage.css';
import { Link } from "react-router-dom";

const SignupPage2 = () => {
    return ( 
        <div>
            <SigninBar/>
            <div className="signinbarbg0"></div>
            <div className="signinbarbg1">
                <div className="signinbarbg1text0">Lorem ipsum dolor sit amet</div>
                <div className="signinbarbg1text1">
                    habitant aliquam, risus enim diam. Blandit sit cras adipiscing neque suscipit et suscipit posuere orci ornare.
                </div>
                <div className="signinbarbg1pic"></div>            
            </div>

            <div className="signinbarbg2">
                <div className="signinbarbg2text1">
                    <div>Your parent or guardian's email</div>
                    <div className="signinbarbg2text_1">We're excited to get you started, but we need to notify your parent or guardian about your account.</div>
                </div>
                <input type="text" className="signinbarbg2bar6" placeholder="example@email.com"/>

                <div className="signinbarbg2text2">
                    <div>Choose your username </div>
                    <div className="signinbarbg2text_1">tant aliquam, risus enim diam, Blandit sit cras adipiscing neque suscipit</div>
                </div>
                <input type="text" className="signinbarbg2bar7"/>

                <div className="signinbarbg2text3">
                    <div>Create your password </div>
                    <div className="signinbarbg2text_1">tant aliquam, risus enim diam, Blandit sit cras adipiscing neque suscipit</div>
                </div>
                <input type="text" className="signinbarbg2bar8" placeholder="Enter password (8 characters minimum)"/>    
                <Link to="/SignupPage4"><button className="signinbarbg2button4">Sign up</button></Link>
            </div>
        </div>
     );
}
 
export default SignupPage2;