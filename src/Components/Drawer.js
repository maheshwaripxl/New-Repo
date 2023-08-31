import * as React from 'react';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function MobileDrawer() {
  
    const [flag, setFlag] = useState()

  return (
    <div className='drawer-wrapper'>  
        <React.Fragment>
        <MenuRoundedIcon className='icon' onClick={() => setFlag(true)}/>
            <Drawer anchor={"left"} open={flag} onClose={() => setFlag(false)}>
                <div className='mobile-drawer'>
                    <a href="/"><p className='link'>Dashboard</p></a>
                    <a href="/"><p className='link'>Agencies</p></a>
                    <a href="/"><p className='link'>Users</p></a>
                    <a href="/"><p className='link'>About Us</p></a>
                    <a href="/"><p className='link'>Terms & Condition</p></a>
                    <a href="/"><p className='link'>Privacy Policy</p></a>
                    <a href="/"><p className='link'>Settings</p></a>
                </div>    
            </Drawer>
        </React.Fragment>
    </div>
  );
}
// export default MobileDrawer;