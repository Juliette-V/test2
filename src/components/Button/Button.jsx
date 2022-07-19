import React from 'react'
import classes from './Button.module.scss';

export function Button({children, color, width}) {
  return (
    <button style={{width: width}} className={classes.button + ' ' + classes[color]}>{children}</button>
  )
}
