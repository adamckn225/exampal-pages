import ShortedSideBar from "./Bar/ShortedSideBar";
import { Link } from "react-router-dom";
import NavBar from "./Bar/NavBar";
import './Expandedqns.css';


const Expandedqns = () => {
    return ( 
        <div>
            <NavBar/>
            <ShortedSideBar />
        <div className='topRight'></div>
        <div className="navbar">
            <div className="mostrecentbar0">Date</div>
            <div className="mostrecentbar1">Question</div>
            <div className="mostrecentbar2">Minimise all questions</div>
        </div>

            <div className="table0">
                <div className="table0text0">
                    <div>Sep</div>
                    <div>1</div>
                </div>
                    <div className="table0text1">Question 2*</div>
                    <div className="table0text2">Which of the following is correct? (4 marks)</div>
                    <div className="table0logo0"></div>
                    <div className="table0logo1"></div>

                    <div className="table0pic0"></div>
                    <div className="table0pic1"></div>
                    <div className="table0line"></div>
                    <div className="table0text3">Result</div>
                    <div className="table0text4">Q12.</div>
                    <div className="table0text5">Question type: <br/>Critical thinkning</div>
 
                    <div className="table0box0">
                        <div className="table0boxpic0"></div>
                        <div className="table0boxtext0">A.</div>
                        <div className="table0boxtext1">is heavier than</div>
                        <div className="table0boxpic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>
                   
                    <div className="table0box1">
                        <div className="table0box1pic0"></div>
                        <div className="table0boxtext0">B.</div>
                        <div className="table0boxtext1">is heavier than</div>
                        <div className="table0boxpic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="table0box2">
                        <div className="table0boxpic0"></div>
                        <div className="table0boxtext0">C.</div>
                        <div className="table0boxtext1">is lighter than</div>
                        <div className="table0box2pic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="table0box3">
                        <div className="table0box3pic0"></div>
                        <div className="table0boxtext0">D.</div>
                        <div className="table0boxtext1">is lighter than</div>
                        <div className="table0box3pic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="table0box4">
                        <div className="table0boxtext0">E.</div>
                        <div className="table0box4text1">I am not sure</div>
                    </div>

                    <input type="checkbox" className="button5box"/>
                        <div className="button5">Yes, I understand</div>
                        <Link to="./Practisesimilar"><button className="button6">Practise similar questions</button></Link>
                    </div>

                    <div className="table0hole0"></div>
                    <div className="table0hole1"></div>
                    <div className="table0hole2"></div>
                    <div className="table0hole3"></div>
                    <div className="table0rope0"></div>
                    <div className="table0rope1"></div>

                    <div className="blackboard0"></div>
                    <div className="blackboard1"></div>
                    <div className="blackboardtext0">Correct answer: D</div>
                    <div className="teacher0"></div>
                    <div className="note0"></div>
                    <div className="note0pic0"></div>
                    <div className="note0text0">Notes</div>
                    <div className="note0text1">Correct answer: D</div>

            <div className="table1">
                <div className="table0text0">
                    <div>Sep</div>
                    <div>1</div>
                </div>
                    <div className="table0text1">Question 2*</div>
                    <div className="table0text2">Which of the following is correct? (4 marks)</div>
                    <div className="table0logo0"></div>
                    <div className="table0logo1"></div>

                    <div className="table0pic0"></div>
                    <div className="table0pic1"></div>
                    <div className="table0line"></div>
                    <div className="table0text3">Result</div>
                    <div className="table0text4">Q12.</div>
                    <div className="table0text5">Question type: <br/>Critical thinkning</div>
 
                    <div className="table0box0">
                        <div className="table0boxpic0"></div>
                        <div className="table0boxtext0">A.</div>
                        <div className="table0boxtext1">is heavier than</div>
                        <div className="table0boxpic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>
                   
                    <div className="table0box1">
                        <div className="table0box1pic0"></div>
                        <div className="table0boxtext0">B.</div>
                        <div className="table0boxtext1">is heavier than</div>
                        <div className="table0boxpic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="table0box2">
                        <div className="table0boxpic0"></div>
                        <div className="table0boxtext0">C.</div>
                        <div className="table0boxtext1">is lighter than</div>
                        <div className="table0box2pic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="table0box3">
                        <div className="table0box3pic0"></div>
                        <div className="table0boxtext0">D.</div>
                        <div className="table0boxtext1">is lighter than</div>
                        <div className="table0box3pic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="table0box4">
                        <div className="table0boxtext0">E.</div>
                        <div className="table0box4text1">I am not sure</div>
                    </div>

                    <input type="checkbox" className="button5box"/>
                        <div className="button5">Yes, I understand</div>
                        <Link to="./Practisesimilar"><button className="button6">Practise similar questions</button></Link>
                    </div>

                        <div className="blackboard2"></div>
                        <div className="blackboard3"></div>
                        <div className="teacher1"></div>
                        <div className="note1"></div>
    </div>
     );
}
 
export default Expandedqns;