import React from 'react'
import ElectionAppsMobile from './ElectionApps/ElectionAppsMobile'
import ElectionAppsDesktop from './ElectionApps/ElectionAppsDesktop'
import { isDeviceMobile } from '../utils/functions'

export default (props) => {
  return (
    isDeviceMobile()
      ? (<ElectionAppsMobile { ...props } />)
      : (<ElectionAppsDesktop { ...props } />)
  )
}
