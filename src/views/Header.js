import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header(props) {

    return (
        <div style={{flexGrow: 1}}>
            <AppBar elevation={0} position="relative">
                <Toolbar>
                    <IconButton style={{marginRight: 2}} edge="start" color="inherit" aria-label="menu" onClick={props.buttonClick}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography style={{flexGrow: 1}} variant="h6" align="center">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;