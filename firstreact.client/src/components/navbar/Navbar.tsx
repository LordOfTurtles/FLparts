import './navbar.scss'
import {Menu} from  "@mui/icons-material"
import {Link} from "react-router-dom"

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <div className="users">Users</div>
            <div className="hamburger">
                <Menu />
            </div>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/users/add">Add user</Link></li>       
                </ul>
            </div>
            

        </div>
    )
}

export default Navbar