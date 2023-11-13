import { Link } from "react-router-dom/cjs/react-router-dom.min";



const Navibar = () => {
    return ( 
        <nav className="navbar">
            <Link to = "/" className ="link_h"> Family's Blogs</Link>
            <div className="links">
                < Link to= "/" className = "link_home">Home</Link>
                < Link to = "/create" className = "link_new_blog">New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navibar;