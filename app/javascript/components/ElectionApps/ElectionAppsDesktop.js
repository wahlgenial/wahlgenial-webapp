import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import ElectionAppsHome from './ElectionAppsHome'
import AppDescriptionDesktop from './AppDescriptionDesktop'

class ElectionAppsDesktop extends React.Component {
  constructor (props) {
    super(props)
    this.handleAppSelect = this.handleAppSelect.bind(this)
    this.state = {
      selectedCategorySlug: false,
      selectedAppSlug: false
    }
  }

  componentWillMount () { this.selectAppFromParams() }

  handleAppSelect (categorySlug, appSlug, historyHandler) {
    this.setState({
      selectedCategorySlug: categorySlug,
      selectedAppSlug: appSlug
    })
    if (historyHandler) {
      historyHandler.push(`/wahl_apps/${categorySlug}/${appSlug}`)
    }
  }

  extractParamsFromUri () {
    const params = window.location.href.replace(/(.*wahl_apps)/, '')
    return params.split('/').filter((value) => { if (value !== '') return true })
  }

  selectAppFromParams () {
    const paramsArray = this.extractParamsFromUri()
    if (paramsArray.length !== 0) {
      this.handleAppSelect(paramsArray[0], paramsArray[1])
    }
  }

  selectedApp () {
    // this method should be more advanced
    let selectedApp = null
    this.props.appsCategories.map((category) => {
      category.apps.map((app) => {
        if (app.slug === this.state.selectedAppSlug) { selectedApp = app }
      })
    })
    return selectedApp
  }

  render () {
    const { appsCategories } = this.props
    return (
      <BrowserRouter>
        <div>
          <Route path="/wahl_apps/:category/:app" render={ () => <AppDescriptionDesktop data={ this.selectedApp() } /> }/>
          <Route exact path='/wahl_apps/' render= { (props) => <ElectionAppsHome { ...props } appsCategories={ appsCategories } handleAppSelect={ this.handleAppSelect } /> } />
        </div>
      </BrowserRouter>
    )
  }
}

ElectionAppsDesktop.defadivtProps = {}

ElectionAppsDesktop.propTypes = {}

export default ElectionAppsDesktop
