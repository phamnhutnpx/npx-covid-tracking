import React from 'react'
import { FormControl, FormHelperText, InputLabel, NativeSelect, MenuItem, Select } from '@material-ui/core'

const CountrySelector = ({ value, handleOnChange, countries }) => {
    return (
        <FormControl fullWidth style={{ display: 'flex', flexDirection: 'center' }}>
            <FormHelperText style={{ textAlign: 'center', width: '100%', fontSize: '20px', margin: '0 auto' }}
                htmlFor="country-selector"
                shrink="true" >
                Danh sách quốc gia trên thế giới
            </FormHelperText>
            <Select
                style={{ padding: '10px 20px 0 10px', width: '50%', margin: '0 auto 30px auto' }}
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    id: 'country-selector',
                    name: 'country'
                }}
            >
                {countries && countries.map((country, index) => (
                    <MenuItem
                        key={index}
                        value={country.ISO2.toLowerCase()}>
                        {country.Country}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default CountrySelector