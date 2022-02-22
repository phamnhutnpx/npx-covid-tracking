import { useEffect, useState } from 'react'

import { getCountries, getReportByCountry } from './apis'

import CountrySelector from './components/CountrySelector/index'
import Highlight from './components/Highlight/index'
import Summary from './components/Summary/index'


function App() {
  const [countries, setCountries] = useState()
  const [selectedCountryId, setSelectedCountryId] = useState('')
  const [report, setReport] = useState([])
  // truyen api getCountries
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data)
      // set mac dinh khi load len laf data cua vn
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
    <>
      <h1>Theo dõi tình hình covid cả thế giới</h1>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId} />
      <Highlight report={report} />
      <Summary report={report} />
    </>
  )
}

export default App
