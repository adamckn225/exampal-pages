import { Link } from "react-router-dom";
const SigninBar = () => {
    return ( 
        <div>
            <Link to="./"><div className="signinpagelogo0"></div></Link>
            <div className="signinbar0">Help</div>
            <div className="signinbar1">Contact us</div>
            <div className="signinbar2">English</div>
            <div className="signinbar4"></div>
            <Link to ="./SignupPage"><div className="signinbar3">Sign up</div></Link>
            <Link to ="./"><div className="signinbarhome"></div></Link>
        </div>
     );
}
 
export default SigninBar;