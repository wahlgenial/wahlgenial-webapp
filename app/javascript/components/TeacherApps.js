import React from 'react'
import HeaderLogo from './HeaderLogo'
import TeacherAppItemDesktop from './ElectionApps/TeacherAppItemDesktop'


function TeacherApps({ apps }) {
    function tagHandler (app){
      var teacherAppsTags = app.teacher_app_tags;
      var tagNameString = teacherAppsTags.map(function(val){
        return "#" + val.name
      }).join(", ")
      return tagNameString;
    }

    const handleClick = app => () => {
        console.log(apps)
    }


    return (
        <div>
          <div>
            <HeaderLogo />
          </div>
          <div className="apps-container d-flex flex-wrap justify-content-center">
              {apps.map(app => {
                  return <TeacherAppItemDesktop
                  name={app.title}
                  teaserText={app.teaser_text}
                  link={app.link}
                  tool={app.tool}
                  tags={tagHandler(app)}
                  onClick={handleClick(app)}/>
              })}
              {apps.length === 0 && <h1>Kein Treffer</h1>}
          </div>
        </div>
    )
}
export default TeacherApps
