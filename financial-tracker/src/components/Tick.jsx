import '../App.css';
import React from 'react';
import { Card, SparkAreaChart, SparkBarChart, SparkLineChart, Text, Title, Metric } from "@tremor/react"
import RequestAPI from './RequestAPI';


function Tick(props) {

    // console.log(props.ticker)

    return (
        <>
        <Card>
            <Metric>{props.ticker}</Metric>
            <RequestAPI ticker={props.ticker}/>
        </Card>
        </>
    )
}

export default Tick;