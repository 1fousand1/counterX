import React, {ChangeEvent, Dispatch, FC, SetStateAction, useState} from 'react';
import SuperButton from "../SuperButton/SuperButton";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


type SettingsPropsType={
    startValue:number
    maxValue:number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    setError:Dispatch<SetStateAction<boolean>>
    setCount:Dispatch<SetStateAction<number>>
    count: number
    setIsSet:Dispatch<SetStateAction<boolean>>
    error:boolean

}

const Settings:FC<SettingsPropsType> = (props) => {
    const [isEdited, setIsEdited] = useState(false);

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.currentTarget.value);

        if (value < 0) {
            props.setError(true);
        } else if (value >= props.maxValue) {
            props.setError(true);
        } else {
            props.setError(false);
            props.setStartValue(value);
            setIsEdited(true);
        }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
       const value = parseInt(e.currentTarget.value);

        if (value < 0) {
            props.setError(true);
        } else if (value <= props.startValue) {
            props.setError(true);
        } else {
            props.setError(false);
            props.setMaxValue(value);
            setIsEdited(true);
        }
    };


    const onSetClickHandler = () => {
        props.setCount(props.startValue)
        props.setIsSet(true)
        setIsEdited(false);
    }



    const disabledSet = props.error || !isEdited


    return (
        <div className={"Settings"}>
            <div className={"Settings-display"}>
                <div className={props.error ?'Settings-title-error' : 'Settings-title' }>
                    <h1>max value:</h1>
                    <input type="number"value={props.maxValue}onChange={onChangeMaxValue}/>
                </div>
                <div className={ props.error ?'Settings-title-error' : 'Settings-title'}>
                    <h1>start value:</h1>
                    <input type="number" value={props.startValue} onChange={onChangeStartValue}/>
                </div>
            </div>
            <div className={"Settings-btns"}>
                <div className={"buttons"}>
                    <SuperButton title={"set"} disabled={disabledSet} onClick={onSetClickHandler}/>
                </div>
            </div>
        </div>
    );
}

export default Settings;