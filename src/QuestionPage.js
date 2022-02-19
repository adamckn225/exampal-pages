import './Bar/QuestionBar.css';
import QuestionBar from './Bar/QuestionBar';
import { useState } from 'react';

function QuestionPage () {
    const [Activequestion, IsActivequestion] = useState(false)
    return ( 
        <div>
            <QuestionBar/>
            <div className="questiontable0">
                    <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 1</div>
                    <div className="practisetable0text1"></div>
                    <div className="practisetable0logo1"  onClick={(e) =>IsActivequestion(!Activequestion)}>
                        {Activequestion &&(
                            <div className='questioncontent'>
                                <div className='questionitem'>
                                    <div className="hintheading">Hint:</div>
                                    <div className='hintcontent'>
                                        <div>XXXXXXXXXXXXX</div><br/>
                                        <div>YYYYY</div>
                                    </div>
                               </div>
                                <div className='questionitem2'></div>
                            </div>
                        )}
                    </div>
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

                <div className="questiontable1">
                <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 2</div>
                    <div className="practisetable0text1"></div>
                    <div className="practisetable0logo1"  onClick={(e) =>IsActivequestion(!Activequestion)}>
                        {Activequestion &&(
                            <div className='questioncontent'>
                                <div className='questionitem1'>
                                    <div className="questionheading"></div>
                                </div>
                            <div className='questionitem2'></div>
                            </div>
                        )}
                    </div>
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

                <div className="questiontable2">
                    <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 3</div>
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

                <div className="questiontable3">
                <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 4</div>
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
                <div className="questiontable4">
                    <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 5</div>
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

                <div className="questiontable5">
                <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 6</div>
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
                <div className="questiontable6">
                    <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 7</div>
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

                <div className="questiontable7">
                <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 7</div>
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
                <div className="questiontable8">
                    <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 9</div>
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

                <div className="questiontable9">
                <div className="practisetablelogo"></div>
                    <div className="practisetable0text0">Question 10</div>
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
        </div>
     );
}
 
export default QuestionPage;