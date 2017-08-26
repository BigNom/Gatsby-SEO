import React from 'react'
import Link from 'gatsby-link'
import stopMotion from './stopMotion.gif'
console.log(stopMotion)

const SecondPage = () =>
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my first Stop motion Movie</p>

    <img src={stopMotion} alt="Stop Motion" />
    <h2>Nexo Battle</h2>
    <p>This a a short video of the robber trying to steal the jewellery from the middle of no where in particular.</p>
    <ul>
      <li>Lance Fricthman</li>
      <li>Lava guy</li>
      <li></li>
    </ul>
    <p>Posted August 13, 2017</p>
    <Link to="/">Go back to the homepage</Link>
  </div>

export default SecondPage
