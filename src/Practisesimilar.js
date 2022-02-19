import ShortedSideBar from "./Bar/ShortedSideBar";
import TopBar from "./Bar/TopBar";
import { Link } from "react-router-dom";

const Practisesimilar = () => {
    return ( 
        <div>
            <TopBar/>
            <ShortedSideBar />
            <div className="practisetext0">Please read the quesetions and pick the best answer from the following options.</div>
            <div className="practisetext1">--End of Practice--</div>

            <div className="practise0table">
                <div className="practisetablelogo"></div>
                <div className="practisetable0text0">Question 1</div>
                <div className="practisetable0text1"></div>
                <div className="practisetable0text2">How many apples do you see? (3 marks)</div>
                <div className="practisetable1"></div>

                <div className="practisetable2">
                    <div className="practisetable2text0">A.</div>
                    <div className="practisetable2text0">6</div>
                    </div>
                <div className="practisetable3">
                    <div className="practisetable3text0">B.</div>
                    <div className="practisetable3text0">3</div>
                </div>
                <div className="practisetable4">                    
                    <div className="practisetable4text0">C.</div>
                    <div className="practisetable4text0">4</div>
                </div>
                <div className="practisetable5">
                    <div className="practisetable5text0">D.</div>
                    <div className="practisetable5text0">1</div>
                </div>
                <div className="practisetable6">
                    <div className="table0boxtext0">E.</div>
                    <div className="table0box4text1">I am not sure</div>
                </div>
            </div>

            <div className="practise1table">
                <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 2</div>
                    <div className="practisetable0text1"></div>
                    <div className="practisetable0text2">Which of the following is correct? (4 marks)</div>
                    <div className="practisetable8"></div>
                
                    <div className="practisebox0">
                        <div className="table0boxpic0"></div>
                        <div className="table0boxtext0">A.</div>
                        <div className="table0boxtext1">is heavier than</div>
                        <div className="table0boxpic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>
                                    
                    <div className="practisebox1">
                        <div className="table0box1pic0"></div>
                        <div className="table0boxtext0">B.</div>
                        <div className="table0boxtext1">is heavier than</div>
                        <div className="table0boxpic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="practisebox2">
                        <div className="table0boxpic0"></div>
                        <div className="table0boxtext0">C.</div>
                        <div className="table0boxtext1">is lighter than</div>
                        <div className="table0box2pic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="practisebox3">
                        <div className="table0box3pic0"></div>
                        <div className="table0boxtext0">D.</div>
                        <div className="table0boxtext1">is lighter than</div>
                        <div className="table0box3pic1"></div>
                        <div className="table0boxtext2">.</div>
                    </div>

                    <div className="practisebox4">
                        <div className="table0boxtext0">E.</div>
                        <div className="table0box4text1">I am not sure</div>
                    </div>

                </div>
                <Link to="./Expandedqns"><button className="practisebutton0">Back to previous page </button></Link>
            </div>
     );
}
 
export default Practisesimilar;