import SideBar from "./Bar/SideBar";
import { Link } from "react-router-dom";
import React,  { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [Activetopright, IsActivetopright] = useState(false);
    const [Activecalender, IsActivecalender] = useState(false);
    const [Activeimprove, IsActiveimprove] = useState(false);
    return ( 
        <div >
            <SideBar/>
            <div className="dashboardtable0">
                <div className="dashboardtable0text0">Hello Andy, welcome back!</div>
                <div className="dashboardtable0text1">You completed 120 questions this week!</div>
            </div>

            <div className="dashboardtable1" onClick={(e) =>IsActiveimprove(!Activeimprove)}>
                <div className="dashboardtable1text0">
                    Question to improve for the day! {">"}{">"}{">"}
                        {Activeimprove &&(
                            <div className="improvecontent">
                                <div className="improvecontent"></div>
                                <div className='calenderitem2'></div>
                                <div className='improveitem1'>Which of the following is correct? (4 marks)</div>
                                <div className='improveitem2'></div>
                                <div className='improveitem3'>Solution:</div>
                                <div className="improveitem4">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
                            </div>
                        )}
                </div>
            </div>
            <Link to ="Expandedqns"><div className="dashboardtable2">
                <div className="dashboardtable2text0">Check out the answer!</div>
                <div className="dashboardtable2pic0"></div>
                <div className="dashboardtable2text1">ANSWER</div>
            </div></Link>
            <div className="dashboardheading0">
                <div className="dashboardheading0text0">Your task today</div>
            </div>

                <Link to="/QuestionPage"><div className="dashboardtable3">
                    <div className="dashboardtable3pic"></div>
                    <div className="dashboardtable3text0">Chapter 2: Algebra Practice</div>
                    <div className="dashboardtable3text1">Skill Sharpness Math</div>
                    <div className="dashboardtable3text2">12:30 pm</div>
                    <div className="dashboardtable3text3">Today</div>
                    <div className="dashboardtable3text4">38%</div>
                    <button className="dashboardtable3button">Resume</button>
                </div></Link>

                <div className="dashboardtable4">
                    <div className="dashboardtable4pic"></div>
                    <div className="dashboardtable3text0">Geometry solving Practice</div>
                    <div className="dashboardtable3text1">Intensive Mathematics Practice</div>
                    <div className="dashboardtable3text2">8:30 pm</div>
                    <div className="dashboardtable3text3">Today</div>
                    <div className="dashboardtable3text4">100%</div>
                </div>

                <Link to="/QuestionPage"><div className="dashboardtable5">
                    <div className="dashboardtable3pic"></div>
                    <div className="dashboardtable3text0">Geometry solving Practice</div>
                    <div className="dashboardtable3text1">Intensive Mathematics Practice</div>
                    <div className="dashboardtable3text2">8:30 pm</div>
                    <div className="dashboardtable3text3">Today</div>
                    <button className="dashboardtable5button">Start</button>
                </div></Link>

            <div className="dashboardheading1">
                <div className="dashboardheading0text0">Upcoming tasks</div>
            </div>
                <div className="dashboardheading3" onClick={(e) =>IsActivecalender(!Activecalender)}>
                    See all
                            {Activecalender &&(
                                <div className='calendercontent'>
                                    <div className='calenderitem1'>
                                        <div className="calenderheading">Upcoming tasks</div>
                                        <div className="calendermonth">Auguest 2021</div>
                                    </div>
                                    <div className='calenderitem2'></div>
                                </div>
                            )}
                </div>
            <div className="smalldashboardbg0"></div>

                    <div className="dashboardtable6">
                        <div className="upcomingtaskspic"></div>
                        <div className="smalldashboardtabletext0">Chapter 3: Photosynthesis Practice</div>
                        <div className="smalldashboardtabletext1">Intensive Mathematics Practice</div>
                        <div className="smalldashboardtabletext2">3:30 pm</div>
                        <div className="smalldashboardtabletext3">Tomorrow</div>
                    </div>
                    <div className="dashboardtable7">
                        <div className="upcomingtaskspic"></div>
                        <div className="smalldashboardtabletext0">Chapter 4: Fractions Practice</div>
                        <div className="smalldashboardtabletext1">Cambrigde Primary Mathematics</div>
                        <div className="smalldashboardtabletext2">7:30 pm</div>
                        <div className="smalldashboardtabletext3">Tomorrow</div>
                    </div>
                    <div className="dashboardtable8">
                        <div className="upcomingtaskspic"></div>
                        <div className="smalldashboardtabletext0">Chapter 3: Photosynthesis Practice</div>
                        <div className="smalldashboardtabletext1">Intensive Mathematics Practice</div>
                        <div className="smalldashboardtabletext2">Aug 12</div>
                        <div className="smalldashboardtabletext3">7:30 pm</div>
                    </div>

                <div className="dashboardheading2">
                    <div className="dashboardheading0text0">Recently completed</div>
                </div>
                <div className="dashboardheading4">See all</div>
                <div className="smalldashboardbg1"></div>

                    <div className="dashboardtable9">
                        <div className="recentlycompletedpic"></div>
                        <div className="smalldashboardtabletext0">Chapter 3: Photosynthesis Practice</div>
                        <div className="smalldashboardtabletext1">Intensive Mathematics Practice</div>
                        <div className="smalldashboardtabletext4">Finished</div>
                        <div className="smalldashboardtabletext5">Today</div>
                    </div>
                    <div className="dashboardtable10">
                        <div className="recentlycompletedpic"></div>
                        <div className="smalldashboardtabletext0">Chapter 4: Fractions Practice</div>
                        <div className="smalldashboardtabletext1">Cambrigde Primary Mathematics</div>
                        <div className="smalldashboardtabletext4">Finished</div>
                        <div className="smalldashboardtabletext5">Yesterday</div>
                    </div>
                    <div className="dashboardtable11">
                        <div className="recentlycompletedpic"></div>
                        <div className="smalldashboardtabletext0">Chapter 3: Photosynthesis Practice</div>
                        <div className="smalldashboardtabletext1">Intensive Mathematics Practice</div>
                        <div className="smalldashboardtabletext4">Finished</div>
                        <div className="smalldashboardtabletext5">on Aug 3</div>
                    </div>
        </div>
     );
}
 
export default Dashboard;