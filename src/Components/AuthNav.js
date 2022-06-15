import { Equalizer, Note, Person, ShortText } from "@mui/icons-material";
import { useState } from "react";
import './css/AuthNav.css'
import { Drawer } from '@mui/material';
import { Link } from "react-router-dom";
const AuthNav = () => {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    return ( 
        <nav className="navigation">
            <ShortText fontSize="large" onClick={toggleDrawer('bottom', true)}/>
            <div className='navbar__mobile'>
                <Drawer
                    anchor={'bottom'}
                    open={state['bottom']}
                    onClose={toggleDrawer('bottom', false)}
                    className="navbar__drawer"
                >
                    <Link to="/tasks">
                        <Note fontSize="large"/>
                    </Link>
                    <Link to="/leaderboard">
                        <Equalizer fontSize="large"/>
                    </Link>
                    <Link to="/account">
                        <Person fontSize="large"/>
                    </Link>
                </Drawer>
            </div>
        </nav>
     );
}
 
export default AuthNav;