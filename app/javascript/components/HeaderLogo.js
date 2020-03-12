import React from 'react'
import PropTypes from 'prop-types'
const logoImage = require('../images/wahlgenial-logo.svg')
const logoImageOrange = require('../images/wahlgenial-logo-orange.svg')

const HeaderLogo = ({ isOrange }) => (
  <div className="logo-container p-2 d-none d-lg-block d-md-block">
    <a href="/">
      <img src={ isOrange ? logoImageOrange : logoImage } title='' />
    </a>
  </div>
)

HeaderLogo.defaultProps = {}

HeaderLogo.propTypes = {
  isOrange: PropTypes.bool
}

export default HeaderLogo
