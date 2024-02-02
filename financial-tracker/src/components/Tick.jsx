import '../App.css';
import React from 'react';
import { Card, SparkAreaChart, SparkBarChart, SparkLineChart, Text, Title } from "@tremor/react"


function Tick(prop) {
    return (
        <Card>
            <Metric>{prop}</Metric>
        </Card>
    )
}

export default Tick;