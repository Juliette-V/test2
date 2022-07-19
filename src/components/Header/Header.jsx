import React from 'react'
import classes from './Header.module.scss';
import logo from '../../resources/images/DNM_Name.png';
import { Button } from '../Button/Button';

export function Header() {
  return (
    <header className={classes.header}>
       <div className={classes.innerContainer}>
        <img src={logo} alt='logo'/>
        <nav className={classes.nav}>
            <a href='#'>about us</a>
            <a href='#'>our servises</a>
            <a href='#'>become a driver</a>
            <a href='#'>dispatchers</a>
            <a href='#'>contact us</a>
        </nav>
        <Button color='red'>TRack shipment</Button>
        </div> 
    </header>
  )
}
