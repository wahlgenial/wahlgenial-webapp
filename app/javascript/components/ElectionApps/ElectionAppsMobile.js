import React from 'react'
import AppDescriptionModal from './AppDescriptionModal'
import icons, {ElectionAppsCategoriesIcons} from '../../images/icons'

class ElectionAppsMobile extends React.Component {
  constructor (props) {
    super(props)
    this.toggleAppModal = this.toggleAppModal.bind(this)
    this.state = {
      selectedAppIndex: null,
      selectedCategoryIndex: null,
      appModalIsOpen: false
    }
  }

  toggleAppModal () {
    const {appModalIsOpen} = this.state
    this.setState({appModalIsOpen: !appModalIsOpen})
  }

  isAnyAppSelected () {
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    return (selectedCategoryIndex !== null && selectedAppIndex !== null)
  }

  handleAppSelect (categoryIndex, appIndex) {
    this.setState({
      selectedCategoryIndex: categoryIndex,
      selectedAppIndex: appIndex,
      appModalIsOpen: true
    })
  }

  selectedApp () {
    if (!this.isAnyAppSelected()) return false
    const {selectedCategoryIndex, selectedAppIndex} = this.state
    const {appsCategories} = this.props
    return appsCategories[selectedCategoryIndex].apps[selectedAppIndex]
  }

  handleIcon = (iconString) => {
    if (!iconString || iconString === ' ') {
      return (ElectionAppsCategoriesIcons.unknown)
    } else {
      return (ElectionAppsCategoriesIcons[iconString])
    }
  }

  render () {
    const {appModalIsOpen} = this.state
    const {appsCategories} = this.props
    const selectedAppDetails = this.selectedApp()
    return (
      <div className="election-apps-mobile">
        <div className="wrapper">
          <div className="row col-12 no-gutters">
            <AppDescriptionModal
              isOpen={ appModalIsOpen }
              toggleModal = { this.toggleAppModal }
              selectedAppDetails = { selectedAppDetails } />
          </div>
        </div>
        <div className="text-center mb-5">
          <h1 className="main-title"> WAHL-APPS </h1>
          <p className="px-3 col-12 text-center">Was steckt eigentlich hinter den ganzen politischen Wörtern? <br /> Schau selbst nach!</p>
        </div>
        <div id="app-description" className="m-auto category-container">
          {appsCategories.map((category, categoryIndex) => {
            return ((category.apps && category.apps.length !== 0) && (
              <div key={ categoryIndex } className="category wrapper">
                <div className="text-center">
                  <div className="category-title-icon">
                    <img src={ this.handleIcon(category.icon_name) } title={ category.title } />
                  </div>
                  <h2 className="category-title">{category.title}</h2>
                </div>
                <div className="apps">
                  {category.apps.map((app, appIndex) => (
                    <div key={ appIndex } className="app no-gutters d-flex flex-row">
                      <div className="col-6" onClick={ () => { this.handleAppSelect(categoryIndex, appIndex) } }>
                        <div className="d-flex h-100">
                          <div className="align-self-center">
                            <h3 className="app-title">{app.name}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="app-info col-6">
                        <div className="d-flex h-100">
                          <div className="align-self-center d-flex flex-row justify-content-around">
                            <div className="align-self-start my-auto">
                              <div className="more-icon mr-3" onClick={ () => { this.handleAppSelect(categoryIndex, appIndex) } }>
                                <img src={ icons.info } />
                              </div>
                            </div>
                            <div className="align-self-end my-auto">
                              <a className="btn btn-yellow" href={ !app.link ? '#' : app.link } target="_blank"> Los geht's </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          })}
        </div>
      </div>
    )
  }
}

ElectionAppsMobile.defadivtProps = {}

ElectionAppsMobile.propTypes = {}

export default ElectionAppsMobile
