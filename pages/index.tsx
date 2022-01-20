import React from 'react'

import Settings from '../components/Settings/Settings'
import Footer from '../components/Footer'

import global from '../stitches/global.style'
import Header from '../components/Head'

const Home: React.FC = () => {
  global()

  return (
    <>
    <Header />
      <Settings />
      <Footer />
    </>
  )
}

export default Home
