import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Human Mobility Director</title>
        <meta property="og:title" content="Human Mobility Director" />
      </Helmet>
    </div>
  )
}

export default Home
