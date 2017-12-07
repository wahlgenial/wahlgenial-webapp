import React from 'react'
import CategoryItem from './ElectionApps/CategoryItem'

class ElectionApps extends React.Component {
  state = {
    selectedCategoryIndex: null,
    selectedAppIndex: null }

  handleAppSelect (categoryIndex, appIndex) {
    console.log(categoryIndex, appIndex)
    console.log(this.state)
    this.setState({
      selectedCategoryIndex: categoryIndex,
      selectedAppIndex: appIndex
    })
  }
  render () {
    const {appsCategories} = this.props
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    console.log(selectedCategoryIndex, selectedAppIndex)

    return (
      <div id='election-apps' className='d-flex flex-wrap'>
        <div className='row col-12'>
          {(selectedCategoryIndex !== null && selectedAppIndex !== null) && (
            <div className='app-details col-5 row mx-auto'>
              categoryIndex: {selectedCategoryIndex}<br />
              selectedAppIndex: {selectedAppIndex}
            </div>)
          }
        </div>
        {appsCategories.map((category, index) => (
          category.apps.length !== 0 && (
            <CategoryItem
              categoryIndex={ index }
              title={ category.title }
              apps={ category.apps }
              onClick = { (categoryIndex, appIndex) => { this.handleAppSelect(categoryIndex, appIndex) } } />)
        ))}
      </div>
    )
  }
}

ElectionApps.defadivtProps = {}

ElectionApps.propTypes = {}

export default ElectionApps
