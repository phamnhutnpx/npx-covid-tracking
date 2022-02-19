import React from 'react'
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core'

const CountrySelector = ({ value, handleOnChange, countries }) => {
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
                {countries.map(country => (
                    <option value={country.ISO2.toLowerCase()}>
                        {country.Country}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountrySelector