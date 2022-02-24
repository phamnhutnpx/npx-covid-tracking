import React from 'react'
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    wrapper: (props) => {
        if (props.type === 'confirmed') return { borderLeft: '5px solid red' }
        // if (props.type === 'recovered') return { borderLeft: '5px solid green' }
        else return { borderLeft: '5px solid gray' }
    },
    title: { fontSize: '18px', marginBottom: '5px' },
    count: { fontSize: '18px', fontWeight: 'bold' },
})
function HighlightCart({ title, count, type }) {

    const styles = useStyles({ type })
    return (

        <Card className={styles.wrapper}>
            <CardContent>
                <Typography
                    variant="body2"
                    component="p"
                    className={styles.title}>{title}
                </Typography>
                <Typography
                    variant="body2"
                    component="span"
                    className={styles.count}>{count}
                </Typography>
            </CardContent>
        </Card>

    )
}

export default HighlightCart