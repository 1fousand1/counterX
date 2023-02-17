import React, {useEffect, useState} from 'react';
import './App.css';
import Settings from "./Components/Settings/Settings";
import Counter from "./Components/Counter/Counter";


function App() {
    const [count, setCount] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [error, setError] = useState(false)
    const [isSet, setIsSet] = useState(false)


    return (
        <div className="App">
            <Settings
                startValue={startValue}
                setStartValue={setStartValue}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                setError={setError}
                setCount={setCount}
                count={count}
                setIsSet={setIsSet}
                error={error}/>
            <Counter
                count={count}
                setCount={setCount}
                error={error}
                setError={setError}
                maxValue={maxValue}
                startValue={startValue}
                isSet={isSet}/>
        </div>
    );
}

export default App;
