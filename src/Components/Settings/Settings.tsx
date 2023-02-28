import React, {ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import SuperButton from "../SuperButton/SuperButton";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


type SettingsPropsType={
    startValue:number
    maxValue:number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    setStartError:Dispatch<SetStateAction<boolean>>
    setCount:Dispatch<SetStateAction<number>>
    count: number
    setIsSet:Dispatch<SetStateAction<boolean>>
    startError:boolean
    setMaxError:Dispatch<SetStateAction<boolean>>
    maxError:boolean

}

const Settings:FC<SettingsPropsType> = (props) => {
    const [isEdited, setIsEdited] = useState(false);

    useEffect(() => {
        const savedStartValue = localStorage.getItem('startValue');
        const savedMaxValue = localStorage.getItem('maxValue');
        if (savedStartValue && savedMaxValue) {
            props.setStartValue(parseInt(savedStartValue));
            props.setMaxValue(parseInt(savedMaxValue));
        }
    }, []);


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        const startValue = parseInt(e.currentTarget.value);
        if (startValue < 0 || startValue >= props.maxValue) {///
            props.setStartError(true);
        } else {
            props.setStartValue(startValue)
            props.setStartError(false);
            setIsEdited(true);
        }
    } ///логику можно в отдельную функцию ///чтобы возможно было написать тест

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
       const maxValue = parseInt(e.currentTarget.value);
        if (maxValue < 0 || maxValue <= props.startValue ) {
            props.setMaxError(true);
        } else {
            props.setMaxValue(maxValue);
            props.setMaxError(false);
            setIsEdited(true);
        }
    };


    const onSetClickHandler = () => {
        props.setCount(props.startValue)
        localStorage.setItem('startValue', props.startValue.toString());
        localStorage.setItem('maxValue', props.maxValue.toString());
        props.setIsSet(true)
        setIsEdited(false);

    }

    const startValueInputClass =  props.startError ? 'inputStartValue-error' : 'inputStartValue';
    const maxValueInputClass =  props.maxError ? 'inputMaxValue-error' : 'inputMaxValue';

    const disabledSet = (props.maxError || props.startError) || !isEdited

    return (
        <div className={"Settings"}>
            <div className={"Settings-display"}>
                <div className={'Settings-title' }>
                    <h1>max value:</h1>
                    <input  className={maxValueInputClass} type="number" value={props.maxValue} onChange={onChangeMaxValue}/>
                </div>
                <div className={'Settings-title'}>
                    <h1>start value:</h1>
                    <input className={startValueInputClass} type="number" value={props.startValue} onChange={onChangeStartValue}/>
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