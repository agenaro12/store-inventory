import { Outlet, Link } from "react-router-dom";
import classModule from './header.module.css';
const Header = (props) => {
    const Nav_Bar = (
        //<div className={classModule.mainHeader}>
        <>
            <nav className={classModule.mainNav}>
                <ul className={classModule.mainNav__Items}>
                    <li className={classModule.mainNav__Item}><Link to='/'>Products</Link></li>
                    <li className={classModule.mainNav__Item}><Link to='/about'>About Us</Link></li>
                    <li className={classModule.mainNav__Item}><Link to='/contact'>Contact Us</Link></li>
                    <li className={classModule.mainNav__Item}><Link to='/signin'>Sign In</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
    return Nav_Bar;
}

export default Header;