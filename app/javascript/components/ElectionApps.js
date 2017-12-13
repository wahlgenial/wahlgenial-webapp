import React from 'react'
import CategoryItem from './ElectionApps/CategoryItem'
class ElectionApps extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedCategoryIndex: null,
      selectedAppIndex: null,
      categoryIndexOrder: Object.keys(this.props.appsCategories)
    }
  }

  handleAppSelect (categoryIndex, appIndex) {
    this.setState({
      selectedCategoryIndex: categoryIndex,
      selectedAppIndex: appIndex
    })
  }
  orderedAppsCategories () {
    const {categoryIndexOrder, selectedCategoryIndex} = this.state
    if (this.appSelected()) {
      categoryIndexOrder.unshift(
        categoryIndexOrder.splice(
          categoryIndexOrder.indexOf(selectedCategoryIndex),
          1
        )[0])
    }
    return categoryIndexOrder
  }

  appSelected () {
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    return (selectedCategoryIndex !== null && selectedAppIndex !== null)
  }
  render () {
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    const {appsCategories} = this.props
    return (
      <div id='election-apps' className='d-flex flex-wrap'>
        <div className='row col-12'>
          {this.appSelected() && (
            <div className='app-details col-5 row mx-auto'>
              categoryIndex: {selectedCategoryIndex}<br />
              selectedAppIndex: {selectedAppIndex}
            </div>)
          }
        </div>
        {this.orderedAppsCategories().map((orderedIndex, index) => {
          let category = appsCategories[orderedIndex]
          return (category.apps && category.apps.length !== 0) && (
            <CategoryItem
              key={ index }
              categoryIndex={ orderedIndex }
              iconName={ category.icon_name }
              title={ category.title }
              apps={ category.apps }
              onClick = { (categoryIndex, appIndex) => { this.handleAppSelect(categoryIndex, appIndex) } } />)
        })}
      </div>
    )
  }
}

ElectionApps.defadivtProps = {}

ElectionApps.propTypes = {}

export default ElectionApps
