import '../App.css';
import React from 'react';
import { useState} from 'react';
import { TextInput } from "@tremor/react";
import {Card, Metric, Title} from "@tremor/react";
import API_KEY from './api_key';


function AddTick() {
    const [value, setValue] = useState("")
    const [tickerArray, setArray] = useState([]);
    const [calledArray, setCalled] = useState([]);
    const [data, setData] = useState([])

    let API = 'https://financialmodelingprep.com/api/v3/quote-order/'

    return (
        <>

            <div className='inputwrapper'>

                <TextInput placeholder='Add Ticker...' value={value} onChange={(e) => {setValue(e.target.value)}} onKeyDown={(e) => {
                    if (e.key == "Enter" && !tickerArray.includes(e.target.value.toUpperCase())) {
                        setArray([
                            ...tickerArray,
                            e.target.value.toUpperCase()
                        ]);

                        useEffect(() => {
                            axios.get(API + e.target.value.toUpperCase() + API_KEY)
                    
                              .then(response => {
                                setData(response.data);})
                    
                              .catch(error => {
                                console.error(error);});
                    
                          }, []);

                        if (data.length > 0) {
                            setCalled([
                                ...calledArray,
                                <>
                                    <Card>
                                        <Metric>{e.target.value.toUpperCase()}</Metric>
                                        <Title style={{color: data[0]['change'][0] == '-' ? "red" : "green"}}>{data[0]['price']}</Title>
                                    </Card>
                                </>
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