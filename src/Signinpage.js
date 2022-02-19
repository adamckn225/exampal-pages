import { Link } from "react-router-dom";
import SigninBar from "./Bar/SigninBar";
import './SigninPage.css';

const Signinpage = () => {
    return ( 
        <div>
            <SigninBar/>
            <div className="signinpagelogo1"></div>
            <div className="signinpagetext0">WELCOME BACK!</div>
            <div className="signinpagetext1">Don't have an account?</div>
            <Link to ="./SignupPage"><div className="signinpagetext2">Sign up</div></Link>
            <div className="username">Username</div>
            <input type="text" className="usernamebar0" placeholder="deniel123@gmail.com" />
            <div className="password">Password</div>
            <input type="text" className="passwordbar0" placeholder="" />
                <div className="rememberme">
                    <input type="radio" className="remembermebutton"/>
                        <label className="remembermetext">Remember me</label>
                </div>

            <div className="forgotpassword">Forgot password?</div>
                <Link to="./Dashboard"><div className="signinpagesigninbar">
                    <div className="signin">Sign in</div>
                </div></Link>
                
            <div className="signinpagetext3">or continue with</div>
            <div className="signinpageline"></div>

            <div className="signinpagebutton0"></div>
            <div className="signinpagebutton1"></div>
            <div className="signinpagebutton2"></div>
        </div>
     );
}
 
export default Signinpage;