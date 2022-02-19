import { Link } from "react-router-dom";
import './TopBar.css';

const TopBar = () => {
    return ( 
        <div className="practise">
            <div className="topbarbg"></div>
            <Link to="./Mostrecent"><button className="topbarbutton0">Back to the review page</button></Link>
            <button className="topbarbutton1">Save</button>
            <button className="topbarbutton2">Submit</button>
            <div className="topbarTopRight"></div>
        </div>
     );
}
 
export default TopBar;