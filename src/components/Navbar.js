import React, { useState } from 'react';
import './navbar.css';
import pp from './youtube.png';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Avatar } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';



export default function Navbar(props) {
    const [searchvalue, setvalue] = useState('');
    const history = useHistory();

    return (
        <nav>
            <div className="navlogo">
                <MenuIcon className="iconmenu" />
                <Link to='/'><img src={pp} alt={"Logo not found"} height="25px" /></Link>
            </div>



            <form className="search" onSubmit={(e) => {
                e.preventDefault();

                history.push({ pathname: "/search", state: { query: searchvalue } });

            }}>
                <input className="searchbar" type="text" placeholder="Search.." onChange={event => setvalue(event.target.value)} />
                <button type="submit" className="searhButton"><SearchIcon /></button>
            </form>
            <div className="thirddiv">
                <VideoCallIcon className="icons" />
                <AppsIcon className="icons" />
                <NotificationsIcon className="icons" />
                <Avatar className="icons" />
            </div>
        </nav>
    )
}
