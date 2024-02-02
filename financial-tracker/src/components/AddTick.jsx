import '../App.css';
import React from 'react';
import { useState} from 'react';
import { TextInput } from "@tremor/react";
import Tick from './Tick'


function AddTick() {
    const [value, setValue] = useState("")
    const [tickerArray, setArray] = useState([]);

    return (
        <>

            <div className='inputwrapper'>

                <TextInput placeholder='Add Ticker...' value={value} onChange={(e) => {setValue(e.target.value)}} onKeyDown={(e) => {
                    if (e.key == "Enter" && !tickerArray.includes(e.target.value.toUpperCase()))
                        setArray([
                            ...tickerArray,
                            e.target.value.toUpperCase()
                        ])
                        console.log(tickerArray);
                        
                    if (e.key == "Enter") setValue("");}}/>
            </div>

            <div className='tickholder'>
                <ul className='ticks'>
                    {
                        tickerArray.map((item, i) => <li key={i}><Tick ticker={item}/></li>)
                    }
                </ul>

            </div>


        </>
             

    )

}

export default AddTick;