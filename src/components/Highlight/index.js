import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import HighlightCard from './HighlightCard'

const Highlight = ({ report }) => {
    const data = report && report.length ? report[report.length - 1] : []

    const summary = [
        {
            title: 'Số ca nhiễm',
            count: data.Confirmed,
            type: 'confirmed'
        },
        // {
        //     title: 'Số ca khỏi',
        //     count: data.Recovered,
        //     type: 'recovered'
        // },
        {
            title: 'Số ca tử vong',
            count: data.Deaths,
            type: 'death'
        }
    ]
    return (
        <Grid container spacing={3}>


            {summary.map((item, index) => {
                return <Grid
                    item
                    sm={6}
                    xs={12}
                    key={index}>
                    <HighlightCard
                        title={item.title}
                        count={item.count}
                        type={item.type} />
                </Grid>
            })}


        </Grid>
    )
}

export default Highlight