import React from 'react'
const TeacherAppItem = ({name, description, link, onClick}) => {
  const descriptionTurncate = () => {
    return description.substring(0, 98) + '...'
  }
  return (
    <div className="app-item mx-1 mb-2">
      <div className="app-block card">
        <div className="app-description" onClick={ () => { onClick() } }>
          <div className="card-body text-left clearfix">
            <div className="card-title-wrapper">
              <h4 className="card-title">{name}</h4>
            </div>
            <p className="card-text">{descriptionTurncate()}</p>
            <h5 className="more-text">
              mehr LEhrerapp
            </h5>
          </div>
        </div>
        <div className="footer-link">
          <a href={ !link ? '#' : link }>
            <div className="card-footer py-2"> Los geht's </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeacherAppItem
