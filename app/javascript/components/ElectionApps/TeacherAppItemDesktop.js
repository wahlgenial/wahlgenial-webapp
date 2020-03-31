import React from 'react'

const TeacherAppItem = ({name, teaserText, link, forDesktop, forTablet, forSmartphone, forWhiteboard, tags, slug, picture}) => {
  const teaserTextTurncate = () => {
     return teaserText.substring(0, 98) + '...'
  }

  const showTools = () => {
    var arr = []
    if (forDesktop == true){
      arr.push("Desktop")
    }
    if (forTablet == true){
      arr.push("Tablet")
    }
    if (forSmartphone == true){
      arr.push("Smartphone")
    }
    if (forWhiteboard == true){
      arr.push("Whiteboard")
    }
    var string = arr.join(", ");
    return string
  }

  return (
    <div className="app-item mx-1 mb-2">
      <div className="app-block card">
        <div className="app-description">
            <img className="teacherapp-image" src={require('../../images/' + picture)} />
            <div className="teacher-card-content-wrapper">
              <div className="card-title-wrapper">
                {/* whenClicked is a property not an event, per se. <div className="card-tag-text">
                  {tags}
                </div>*/}
                <h4 className="card-title">{name}</h4>
              </div>
                  <p className="card-text">{teaserTextTurncate()}</p>
                  <p className="card-tools">Tools: {showTools()}</p>
                  <a href={'/lehrer-wahl-apps/' + slug} className="card-href"></a>

            </div>
        </div>
        <div className="footer-link">
          <a href={ !link ? '/lehrer-wahl-apps/' + slug : link }>
            <div className="card-footer py-2"> Los geht's </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeacherAppItem
