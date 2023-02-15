import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import Display from "../Display/Display";
import SuperButton from "../SuperButton/SuperButton";

type CounterPropsType={
    count: number
    setCount:Dispatch<SetStateAction<number>>
    setError: Dispatch<SetStateAction<boolean>>
    error:boolean
    maxValue: number
    startValue:number
    isSet:boolean
}


const Counter:FC<CounterPropsType> = (props) => {

    const onClickHandlerIncrement = () => {
        for (let i = props.count; i < props.maxValue ; i++) {
            props.setCount(props.count + 1)
        }

    }
    const onClickHandlerReset = () => {
        props.setCount(props.startValue)

    }

    const disabledInc = props.error ? true : (props.isSet ? false : true)
    const disabledRes = props.error ? true : (props.isSet ? false : true)

    return (
        <div className={'Counter'}>
            <div className={'Counter-display'}>
                {props.error ? <h1 className={"Error"}>Error</h1> :
                    (props.isSet ? <Display count={props.count}/> : <h1 className={'Counter-display-prompt'}>enter values and press "set"</h1>)}
            </div>
            <div className={"Counter-btns"}>
                <SuperButton title={'inc'} disabled={disabledInc} onClick={onClickHandlerIncrement}/>
                <SuperButton title={"res"} disabled={disabledRes} onClick={onClickHandlerReset}/>
            </div>
        </div>
    );
};

export default Counter;