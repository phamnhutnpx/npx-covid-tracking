import React, { useEffect, useState } from 'react'
import HighCharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'

const generateOptions = (data) => {

    const categories = []
    return {
        chart: {
            height: 500
        },
        title: {
            text: 'Tổng ca nhiễm'
        },
        xAxis: {
            categories: categories,
            crosshair: true
        },
        colors: ['#f35858'],
        yAxis: {
            min: 0,
            title: {
                text: null
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat:
                '<tr><td style="{series.color};padding: 0">{series.name}:</td>' + '<td style="padding: 0"><b>{point.y}ca<b/></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [
            {
                name: 'Tổng ca nhiễm',
                data: data.map((item) => item.Confirmed)
            }
        ]
    }
}

function LineChart({ data }) {

    const [options, setOptions] = useState({});
    useEffect(() => {
        setOptions(generateOptions(data))
    }, [data])

    return (
        <HighChartsReact
            highcharts={HighCharts}
            options={options}
        />
    )
}

export default LineChart