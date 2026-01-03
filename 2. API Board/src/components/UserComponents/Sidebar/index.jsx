import './index.scss'
import logo from '/src/assets/logo.svg'
import {Link} from "react-router";
import {FaStore} from "react-icons/fa";

function Sidebar() {
    return (
        <section id={"sidebar"}>
            <div className={"logoWrapper"}>
                <img src={logo} alt={"logo"} className={"logo"}/>
            </div>
            <div className={"links"}>
                <Link to="/" className={"link selected"}>
                    <FaStore className={"icon"}/>
                    <span>Products</span>
                </Link>
            </div>
        </section>
    );
}

export default Sidebar;
