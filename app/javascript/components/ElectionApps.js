import React from 'react'

class ElectionApps extends React.Component {
  state = { selectedApp: null }

  render () {
    console.log(this.props)
    const {appsCategories} = this.props
    return (
      <div id='election-apps' className='col-12 bg-warning'>
        {appsCategories.map((category, index) => (
          <CategoryItem
            title={ category.title }
            apps={ category.apps }
          />
        ))}
      </div>
    )
  }
}

const CategoryItem = ({title, apps}) => {
  return (
    <div>
      <h1>{title}</h1>
      {apps.map((app, index) => (
        <div>
          <h3>{app.name}</h3>
          <p>{app.description}</p>
        </div>
      ))}
    </div>
  )
}

ElectionApps.defadivtProps = {}

ElectionApps.propTypes = {}

export default ElectionApps
