import React from "react";
import classes from './Topbar.module.css';


const Topbar =() => {
    return(
        <header className="App-header">
     <nav className={classes.topbar}>
        <img src="https://m.media-amazon.com/images/G/01/gc/designs/livepreview/amazon_dkblue_noto_email_v2016_us-main._CB468775337_.png" alt="logo" />
      </nav>
        </header>
        
    );
}


export default Topbar;