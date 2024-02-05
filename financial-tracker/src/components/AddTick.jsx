import '../App.css';
import React from 'react';
import {useEffect, useState} from 'react';
import { TextInput } from "@tremor/react";
import {Card, Metric, Title} from "@tremor/react";
import API_KEY from './api_key';
import axios from 'axios';
import RequestAPI from './RequestAPI';


function AddTick() {
    const [value, setValue] = useState("")
    const [tickerArray, setArray] = useState([]);
    const [calledArray, setCalled] = useState([]);
    const [publicTraded, setPublic] = useState([])
    const [modify, setModify] = useState(true)

    let API = 'https://financialmodelingprep.com/api/v3/available-traded/list' + API_KEY;

    useEffect(() => {
        axios.get(API).then((res) => {
            // console.log(res.data);
            setPublic(res.data.map((item) => item['symbol']));
        })
    }, []);

    return (
        
        <>
            <div className='inputwrapper'>
                <TextInput placeholder='Add Ticker...' value={value} onChange={(e) => {setValue(e.target.value)}} onKeyDown={(e) => {
                    if (e.key === "Enter" && !tickerArray.includes(e.target.value.toUpperCase())) {
  
                        setArray([
                            ...tickerArray,
                            e.target.value.toUpperCase()
                        ]);

                        console.log(publicTraded)

                        if (publicTraded.includes(e.target.value.toUpperCase())) {
                            setCalled([
                                ...calledArray,
                                <RequestAPI ticker={e.target.value.toUpperCase()}/>
                            ])
                        }

                        }
                        
                    if (e.key == "Enter") {setValue("");}}}/>
                
            </div>

            <div className='tickholder'>
                <ul className='ticks'>
                    {
                        calledArray.map((item, i) => <li key={i}>{item}</li>)
                        
                    }
                </ul>

            </div>


        </>
             

    )

}


export default AddTick;