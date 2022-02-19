import { Link } from "react-router-dom";
const QuestionBar = () => {
    return ( 
        <div>
        <div className="question">
            <Link to="./Mostrecent"><button className="questionbutton0">Pause</button></Link>
            <button className="questionbutton1">Save</button>
            <button className="questionbutton2">Submit</button>
            <div className="questionTopRight"></div>
        </div>
            <div className="questionsidebarbg">
            <Link to="/Dashboard"><div class="logo-container"></div></Link>

                    <div class="menu"></div>
                        <button class="menu-btn"></button>
                        <div class="dropdown"><p>Content</p></div>
                    
                    <div class="chalkboard-frame">
                        <div>Algebra Practice</div>
                    </div>

                    <div class="timer"></div>

                    <div class="progress">
                        <div class="in-progress"></div>
                    </div>
                    
                    <ul class="sidebar-questions">
                        <li class="sidebar-question"><div>Question 1</div></li>
                        <li class="sidebar-question"><div>Question 2</div></li>
                        <li class="sidebar-question"><div>Question 3</div></li>
                        <li class="sidebar-question"><div>Question 4</div></li>
                        <li class="sidebar-question"><div>Question 5</div></li>
                        <li class="sidebar-question"><div>Question 6</div></li>
                        <li class="sidebar-question"><div>Question 7</div></li>
                        <li class="sidebar-question"><div>Question 8</div></li>
                        <li class="sidebar-question"><div>Question 9</div></li>
                        <li class="sidebar-question"><div>Question 10</div></li>
                    </ul>

                    <button className="questionbutton3">
                        <div className="questionbutton3pic"></div>
                        Back to previous page
                    </button>
                    <button className="questionbutton4">
                        <div className="questionbutton4pic"></div>
                        Next page</button>
                </div>
            </div> 
     );
}
 
export default QuestionBar;