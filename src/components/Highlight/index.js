import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

const Highlight = () => {
    return (
        <Grid container spacing={3}>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="body2" component="p">Số ca mắc</Typography>
                        <Typography variant="body2" component="span">1500</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="body2" component="p">Số ca chữa khỏi</Typography>
                        <Typography variant="body2" component="span">1500</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Card>
                    <CardContent>
                        <Typography variant="body2" component="p">Số ca tử vong</Typography>
                        <Typography variant="body2" component="span">1500</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Highlight