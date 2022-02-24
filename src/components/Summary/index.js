import { Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import LineChart from '../Charts/LineChart'
import HightMaps from '../Charts/HighMaps'


const Summary = ({ report, selectedCountryId }) => {
    const [mapData, setMapData] = useState({})

    // goi API country o day de load ra ban do quoc gia
    useEffect(() => {
        if (selectedCountryId) {
            import(`@highcharts/map-collection/countries/${selectedCountryId}/${selectedCountryId}-all.geo.json`).then(res => setMapData(res))
        }

    }, [selectedCountryId])


    return (
        <Grid container spacing={3}>
            <Grid item sm={8} xs={12}>
                <LineChart data={report} />
            </Grid>
            <Grid item sm={4} xs={12}>
                <HightMaps mapData={mapData} />
            </Grid>
        </Grid>
    )
}

export default Summary