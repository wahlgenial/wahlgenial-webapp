import React from 'react'
const logoImage = require('../images/wahl-daten-helfer-logo.svg')

const HeaderLogo = () => (
  <div className="logo-container p-2 d-none d-lg-block d-md-block">
    <a href="/">
      <img src={ logoImage } title='' />
    </a>
  </div>
)

HeaderLogo.defaultProps = {}

HeaderLogo.propTypes = {}

export default HeaderLogo
