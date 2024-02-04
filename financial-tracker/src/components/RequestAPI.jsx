import '../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Card, Metric, Title} from "@tremor/react";
import API_KEY from './api_key';


// Need to create an event listener that will send API request upon AddTick usage
// after API call is completed, create a tremor card/analytics to be displayed on page

// Get the last time the price was this low, and compare to S&P500
// Customize data that users weant to have on their stock components
// Percentage / dollars away from ATH
// In the past month or week, you are __ from the bottom, and __ from the highs

function RequestAPI(props) {
    const [data, setData] = useState([])

    let API = 'https://financialmodelingprep.com/api/v3/quote-order/' + props.ticker + API_KEY;

    useEffect(() => {
        axios.get(API)

          .then(response => {
            setData(response.data);})

          .catch(error => {
            console.error(error);});

      }, []);

    console.log(setData);

        
    return (
        <>
            <Card>
                <Metric>{ticker.toUpperCase()}</Metric>
                <Title style={{color: Math.sign(data[0]['change']) == -1 ? "red" : "green"}}>{data[0]['price']}</Title>
            </Card>
        </>
    );


}

export default RequestAPI;