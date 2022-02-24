import React, { useEffect, useState } from 'react'
import HighCharts from 'highcharts'
import HighChartsReact from 'highcharts-react-official'
import moment from 'moment'
import { ButtonGroup, Button } from '@material-ui/core'


const generateOptions = (data) => {

    const categories = data.map((item) =>
        moment(item.Date).format('DD-MM-YYYY'))
    return {
        chart: {
            height: 500,
            // width: 1240,
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

    const [options, setOptions] = useState({})
    const [reportType, setReportType] = useState('All')
    useEffect((customData) => {
        // Xu li data de tao lua chon
        switch (reportType) {
            case 'All':
                customData = data
                break
            case '365':
                customData = data.slice(data.length - 365)
                break
            case '30':
                customData = data.slice(data.length - 30)
                break
            case '7':
                customData = data.slice(data.length - 7)
                break
            default: customData = data
        }

        setOptions(generateOptions(customData))
    }, [data, reportType])

    return (
        <div>

            <ButtonGroup size="medium" style={{ display: 'flex', justifyContent: 'center' }}>
                <Button color={reportType === 'All' ? 'secondary' : ''} onClick={() => setReportType('All')}>Tất cả</Button>
                <Button color={reportType === '365' ? 'secondary' : ''} onClick={() => setReportType('365')}>1 năm</Button>
                <Button color={reportType === '30' ? 'secondary' : ''} onClick={() => setReportType('30')}>30 ngày</Button>
                <Button color={reportType === '7' ? 'secondary' : ''} onClick={() => setReportType('7')}>7 ngày</Button>
            </ButtonGroup>
            <HighChartsReact
                highcharts={HighCharts}
                options={options}
            />
        </div>
    )
}

export default LineChart