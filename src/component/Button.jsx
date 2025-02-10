import React from 'react'

export const Button = ({ text,classes, btnStyle, handleClick }) => {
    return (
        <button className={classes} onClick={()=>handleClick(text)} style={btnStyle}>
            {text}
        </button>
    )
}
