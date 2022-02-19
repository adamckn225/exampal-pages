import { Link } from "react-router-dom";
import './ShortedSideBar.css';

const ShortedSidebar = () => {
    return ( 
        <div>
        <div className="Shortedsidebarlogo"></div>
        <div className="Shortedsidebarbg"></div>
        <ul>
        <Link to="/Mostrecent"><li className="ShortedsidebarList0"></li></Link>
            <li className="ShortedsidebarList1"><Link to="/"></Link></li>
            <li className="ShortedsidebarList2"><Link to="/"></Link></li>
            <li className="ShortedsidebarList3"><Link to="/"></Link></li>
            <li className="ShortedsidebarList4"><Link to="/"></Link></li>
        </ul>

        <div className="shortEllipse0"></div>
        <div className="shortEllipse1"></div>
        <Link to="/">
            <div className="shortellipsepic0"></div>
            <div className="shortellipsepic1"></div>
        </Link>
    </div>
     );
}
 
export default ShortedSidebar;