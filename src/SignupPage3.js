import SigninBar from "./Bar/SigninBar";
import './SignupPage.css';
import { Link } from "react-router-dom";

const SignupPage3 = () => {
    return ( 
        <div>
            <SigninBar/>
            <div className="signinbarbg4"></div>
            <div className="signinbarbg1">
                <div className="signinbarbg1text0">Lorem ipsum dolor sit amet
            </div>
                <div>
                    habitant aliquam, risus enim diam. Blandit sit cras adipiscing neque suscipit et suscipit posuere orci ornare.
                </div>
                <div className="signinbarbg1pic"></div>   
            </div>
            <div className="signinbarbg2">
                <div className="signinbarbg2text0">I am a...</div>
                <div className="signinbarbg2button0">
                    <div className="signinbarbg2button0text">Student</div></div>
                <div className="signinbarbg2button1">
                    <div className="signinbarbg2button0text">Parent</div></div>
                <div className="signinbarbg2button2">Date of birth</div>                
                <Link to="/SigninPage"><div className="signinbarbg2button5">Already have an account?</div></Link>
            </div>
        </div>
     );
}
 
export default SignupPage3;