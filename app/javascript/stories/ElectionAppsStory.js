import React from 'react'
import ElectionApps from '../components/ElectionApps'
const appsCategoriesFixture = require('../fixtures/election_apps')
const ElectionAppsStory = () => {
  return (
    <div className="col-lg-12 h-100 mt-3">
      <ElectionApps appsCategories={ appsCategoriesFixture.appsCategories }/>
    </div>
  )
}

export default ElectionAppsStory
