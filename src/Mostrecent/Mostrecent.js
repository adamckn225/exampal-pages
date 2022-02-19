import MostrecentList from "./MostrecentList";
import MostrecentBar from "./MostrecentBar";
import './Mostrecent.css';
import NavBar from '../Bar/NavBar';
import { Link } from "react-router-dom";
import SideBar from "../Bar/SideBar";

const Mostrecent = () => {
    return ( 
        <div>
        <SideBar/>
        <NavBar/>
        <div><Link to="/Expandedqns"><MostrecentList/></Link></div>
        <MostrecentBar/>
        </div>
     );
}
 
export default Mostrecent;