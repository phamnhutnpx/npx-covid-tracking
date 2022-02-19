import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

const CountrySelector = ({ value, handleOnChange }) => {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink>
                Quoc gia eeeeee
            </InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    id: 'country-selector',
                    name: 'country'
                }}
            >

            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector