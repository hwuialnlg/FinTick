import '../App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Need to create an event listener that will send API request upon AddTick usage
// after API call is completed, create a tremor card/analytics to be displayed on page

// Get the last time the price was this low, and compare to S&P500
// Customize data that users weant to have on their stock components
// Percentage / dollars away from ATH
// In the past month or week, you are __ from the bottom, and __ from the highs

function RequestAPI(props) {
    const [simpleQuote, setQuote] = useState([]);
    const [priceChange, setPriceChange] = useState([]);

    let API = 'https://financialmodelingprep.com/api/v3/search-ticker?query=';
    // https://financialmodelingprep.com/api/v3/quote-short/AAPL
    // https://financialmodelingprep.com/api/v3/stock-price-change/AAPL
    // https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG

    // useEffect(() => {
    //     axios.get('https://financialmodelingprep.com/api/v3/search-ticker?query=')

    //       .then(response => {
    //         setData(response.data);})

    //       .catch(error => {
    //         console.error(error);});

    //   }, []);


}

export default RequestAPI;