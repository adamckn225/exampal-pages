import { useState } from 'react';
import './Dropdown.css';

function Dropdown ({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false);
    const options = ["react", "vue", "angular"]; 
    return ( 
            <div className='head'>
                <div className='headbtn' onClick={(e) =>setIsActive(!isActive)}>
                   Choose one{selected}
                </div>
            {isActive &&(
                <div className='headcontent'>
                    {options.map((option) => (
                    <div onClick={(e) => {setSelected(option);setIsActive(false);}}
                    className='headitem'>
                        {option}
                        </div>
                    ))}
                </div>
            )}
        </div>   
     );
}
 
export default Dropdown;