import React from 'react'
import CategoryItem from './ElectionApps/CategoryItem'

class ElectionApps extends React.Component {
  state = { selectedApp: null }

  render () {
    console.log(this.props)
    const {appsCategories} = this.props
    return (
      <div id='election-apps' className='d-flex flex-wrap'>
        {appsCategories.map((category, index) => (
          category.apps.length !== 0 && (<CategoryItem
            title={ category.title }
            apps={ category.apps } />)
        ))}
      </div>
    )
  }
}

ElectionApps.defadivtProps = {}

ElectionApps.propTypes = {}

export default ElectionApps
