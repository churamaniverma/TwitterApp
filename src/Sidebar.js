import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Button from '@mui/material/Button';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon />
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption  Icon={SearchIcon} text="Search" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
            <SidebarOption Icon={MailOutlineIcon} text="Message" />
            <SidebarOption Icon={TurnedInNotIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="List" />
            <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />


            <Button variant="contained">Twite</Button>

        </div>
    )
}

export default Sidebar