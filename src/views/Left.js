import React, { useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material//ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import ModeIcon from '@mui/icons-material/Mode';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import CardMedia from '@mui/material/CardMedia';
import { Routes, Route, Link, NavLink } from "react-router-dom";

import Eduhk from '../image/eduhk.png';

function Left(props) {
    const [state, setState] = useState({
        left: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        setState({ ...state, [anchor]: open });
    };
    const style = ({
        eduhkLogo: {
            paddingTop: '56.25%',
            height: 0,
            backgroundSize: 'contain',
            margin: '0px 20px 0px'
        },
        main: {
            width: '300px'
        }
    });
    const list = [
        { name: 'Inbox', icon: <MailIcon />, link: '/inbox' },
        { name: 'Starred', icon: <StarIcon />, link: '/starred' },
        { name: 'Send email', icon: <SendIcon />, link: '/send_email' },
        { name: 'Drafts', icon: <ModeIcon />, link: '/drafts' },
    ];

    const left = (
        <>

            <CardMedia
                style={style.eduhkLogo}
                image={Eduhk}
                title='Paella dish'
            />
            <Divider />
            <List style={style.main}>

                {list.map((item, index) => (
                    <ListItem button key={index} component={Link} to={item.link}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>

                ))}
            </List>

        </>
    );

    return (
        <div>
            <Drawer anchor='left' open={props.count % 2 === 1} onClose={props.buttonClick}>
                {left}
            </Drawer>
        </div>
    );
    //}
}

export default Left;