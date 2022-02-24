import { useEffect, useState } from 'react'

import { getCountries, getReportByCountry } from './apis'

import CountrySelector from './components/CountrySelector/index'
import Highlight from './components/Highlight/index'
import Summary from './components/Summary/index'

import { Typography, Container } from '@material-ui/core'
import '@fontsource/roboto'

import moment from 'moment'
import 'moment/locale/vi'
moment.locale('vi')

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
    <Container style={{ textAlign: 'center', padding: '0 30px' }}>
      <Typography
        style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }} >
        Theo dõi tình hình covid cả thế giới
      </Typography>
      <Typography style={{ fontWeight: 'bold', textAlign: 'center' }}>{moment().format('LLLL')}</Typography>
      <CountrySelector

        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountryId} />
      <Highlight report={report} />
      <Summary report={report} />
    </Container>
  )
}

export default App
