import { useEffect, useState } from 'react'

import { getCountries, getReportByCountry } from './apis'
import './apis'

import CountrySelector from './components/CountrySelector/index'
import Highlight from './components/Highlight/index'
import Summary from './components/Summary/index'

import { Typography } from '@material-ui/core'
import '@fontsource/roboto'


function App() {
  const [countries, setCountries] = useState()
  const [selectedCountryId, setSelectedCountryId] = useState('')
  const [report, setReport] = useState([])
  // truyen api getCountries
  useEffect(() => {
    getCountries().then((res) => {

      // Requiring the lodash library 
      const _ = require("lodash");
      // sap xep theo ten quoc gia o muc selected
      const countries = _.sortBy(res.data, 'Country')
      setCountries(countries)

      // set mac dinh khi load len la data cua vn
      setSelectedCountryId('vn')
    })

  }, [])
  // xu li khi nguoi dung thay doi quoc gia
  const handleOnChange = (e) => {
    setSelectedCountryId(e.target.value)

  }
  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(country => country.ISO2.toLowerCase() === selectedCountryId)

      // call API
      getReportByCountry(Slug)
        .then((res) => {
          // xoa item cuoi cua mang
          res.data.pop()
          setReport(res.data)
        }
        )
    }
  }, [countries, selectedCountryId])

  return (
    <div className="app-container">
      <Typography variant='h2' component='h2'>
        Số liệu COVID-19 cả thế giới
      </Typography>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId} />
      <Highlight report={report} />
      <Summary report={report} selectedCountryId={selectedCountryId} />
    </div>
  )
}

export default App
