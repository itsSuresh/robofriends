import React from 'react';

const Scroll = (props)=>{
    return (
            <div style={{height:'750px',overflow: 'scroll' ,border:'2px solid black' , }}>
                {props.children}
            </div>
    
    )};
export default Scroll;