import React from 'react'
import styles from './button.module.css'
const Button = ({handleClick, children, isDisabled}) => {

  function handleOnClick(){
    handleClick();
  }
  return (
    <button className={styles["game-btn"]} onClick={handleOnClick} disabled={isDisabled}>{children}</button>
  )
}

export default Button


// shuffle. when game starts, only shuffle active because that's all player can do
//          clicking reshuffles


// deselect all.  is active once one button is clicked. 
//                clicking removes anything from whatever is holding the pre-submit guesses
//                also any class controlling color is removed

// submit.  triggers a check function