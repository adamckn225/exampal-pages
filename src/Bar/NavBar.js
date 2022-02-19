import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
      <div className="navbar">
        <div className='review'>Review</div>
        <Link to="/Topic"><div className="topic">Topic</div></Link>
        <Link to="/Mostrecent"><div className='mostrecent'>Most recent</div></Link>
        <input type="text" className="searchingbar" placeholder="Search by Question, Date, ..." />
        <Link to="/Dropdown"><button className='button0'>Search</button></Link>
        </div>
    );
}
 
export default NavBar;