import React from 'react'
const TeacherAppItem = ({name, teaserText, link, forDesktop, forTablet, forSmartphone, forWhiteboard, tags, slug}) => {
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
            <div className="card-body text-left clearfix">
              <div className="card-title-wrapper">
                <h4 className="card-title">{name}</h4>
              </div>
                  <p className="card-text">{teaserTextTurncate()}</p>
                  <p className="card-tools">Tools: {showTools()}</p>
                  <h5 className="more-text">
                    mehr
                  </h5>
                  <a href={'/lehrer-wahl-apps/' + slug} className="card-href"></a>
              <div className="card-tag-text">
                Tags: {tags}
              </div>
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
