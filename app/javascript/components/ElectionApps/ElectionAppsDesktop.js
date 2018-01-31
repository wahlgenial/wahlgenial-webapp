import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import ElectionAppsHome from './ElectionAppsHome'

const Topic = (props) => (
  <div>
    <h3>{props.message} {props.match.params.id}</h3>
  </div>
)

class ElectionAppsDesktop extends React.Component {
  state = { selectedCategory: false, selectedApp: false }
  componentWillMount () {
    this.selectAppFromParams()
  }

  extractParamsFromUri () {
    const params = window.location.href.replace(/(.*wahl_apps)/, '')
    return params.split('/')
  }

  selectAppFromParams () {
    const paramsArray = this.extractParamsFromUri().filter(
      (value) => { if (value !== '') return true }
    )
    if (paramsArray.length !== 0) {
      this.setState({
        selectedCategory: paramsArray[0],
        selectedApp: paramsArray[1]
      })
    }
  }

  shouldRedirect () {
    const {selectedCategory, selectedApp} = this.state
    const {pathname} = window.location
    if (!selectedCategory || !selectedApp) {
      if (pathname === '/wahl_apps/' || pathname === '/wahl_apps') {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }

  render () {
    const { appsCategories } = this.props
    return (
      <BrowserRouter>
        <div>
          { (this.shouldRedirect()) &&
            (<Redirect from="/wahl_apps/" to="/wahl_apps"/>)
          }
          <Route path="/wahl_apps/:category/:app" render={ (props) => <Topic { ...props } message="topic selected" /> }/>
          <Route exact path='/wahl_apps/' render= { (props) => <ElectionAppsHome { ...props } appsCategories={ appsCategories } /> } />
          <pre>{JSON.stringify(this.state)}</pre>
        </div>
      </BrowserRouter>
    )
  }
}

ElectionAppsDesktop.defadivtProps = {}

ElectionAppsDesktop.propTypes = {}

export default ElectionAppsDesktop
