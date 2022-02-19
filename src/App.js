import { useEffect } from 'react'

import { getCountries } from './apis'

import CountrySelector from './components/CountrySelector/index'
import Highlight from './components/Highlight/index'
import Summary from './components/Summary/index'


function App() {
  // truyen api getCountries
  useEffect(
    () => {
      getCountries().then((res) => {
        console.log({ res })
      })
    }, []
  )

  return (
    <>
      <h3>This is my app covid flow</h3>
      <CountrySelector />
      <Highlight />
      <Summary />
    </>
  )
}

export default App
