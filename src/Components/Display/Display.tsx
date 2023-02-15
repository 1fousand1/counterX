import React from 'react';
import "./Display.css"


type DisplayPropsType ={
    count: number
}


const Display = (props:DisplayPropsType) => {
    return ( <>
            <h3 className={'Counter-Display-Value'}>{props.count}</h3>
        </>


    );
};

export default Display;