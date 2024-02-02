import '../App.css';
import React from 'react';
import { Card, SparkAreaChart, SparkBarChart, SparkLineChart, Text, Title, Metric } from "@tremor/react"


function Tick(props) {

    console.log(props.ticker)

    return (
        <Card>
            <Metric>{props.ticker}</Metric>
        </Card>
    )
}

export default Tick;