import React from 'react'
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'

const CountrySelector = ({ value, handleOnChange, countries }) => {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink>
                Danh sách quốc gia trên thế giới
            </InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    id: 'country-selector',
                    name: 'country'
                }}
            >
                {countries && countries.map((country, index) => (
                    <option key={index} value={country.ISO2.toLowerCase()}>
                        {country.Country}
                    </option>
                ))}
            </NativeSelect>
            <FormHelperText>Chọn quốc gia bạn muốn xem</FormHelperText>
        </FormControl>
    )
}

export default CountrySelector