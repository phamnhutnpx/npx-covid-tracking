import { useEffect, useState } from 'react'

import { getCountries } from './apis'

import CountrySelector from './components/CountrySelector/index'
import Highlight from './components/Highlight/index'
import Summary from './components/Summary/index'


function App() {
  const [countries, setCountries] = useState()

  // truyen api getCountries
  useEffect(() => {
    getCountries().then((res) => {
      setCountries(res.data)
    })
  }, [])

  const handleOnChange = (e) => {
    console.log({ e });
  }

  return (
    <>
      <h3>This is my app covid flow</h3>
      <CountrySelector countries={countries} handleOnChange={handleOnChange} />
      <Highlight />
      <Summary />
    </>
  )
}

export default App
