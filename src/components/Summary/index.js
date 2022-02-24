import { Grid } from '@material-ui/core'
import React from 'react'
import LineChart from '../Charts/LineChart'


const Summary = ({ report }) => {
    return (
        <Grid container spacing={4}
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={1}>
            <Grid item style={{ paddingTop: '30px' }}>
                <LineChart data={report} />
            </Grid>
            {/* <Grid item sm={4} xs={12}></Grid> */}
        </Grid >
    )
}

export default Summary