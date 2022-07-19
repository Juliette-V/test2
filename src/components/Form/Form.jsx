import React from 'react';
import { Button } from '../Button/Button';
import classes from './Form.module.scss';

export function Form() {
  return (
    <form className={classes.form} onSubmit={(e)=>e.preventDefault()}>
        <input className={classes.input} placeholder='Name'></input>
        <input className={classes.input} placeholder='Phone'></input>
        <select className={classes.input + ' '+ classes.select}>
            <option selected disabled>Class a driving experience</option>
            <option>option 1</option>
            <option>option 2</option>
        </select>
        <Button color='blue'>Send</Button>
    </form>
  )
}
