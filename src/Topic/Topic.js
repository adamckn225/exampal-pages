import TopicList from "./TopicList";
import TopicBar from "./TopicBar";
import SideBar from "../Bar/SideBar";
import { Link } from "react-router-dom";
import NavBar from "../Bar/NavBar";
import Reviewpagebutton from "../Reviewpagebutton";

const Topic = () => {
  return (
    <div>
      <SideBar/>
      <TopicBar />
      <NavBar/>
      <Reviewpagebutton/>
      <div><Link to="/Expandedqns"><TopicList/></Link></div>
    </div>
  );
}
 
export default Topic;