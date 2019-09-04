import React from 'react'
import HeaderLogo from './HeaderLogo'
import TeacherAppItemDesktop from './ElectionApps/TeacherAppItemDesktop'


function TeacherApps({ apps }) {
    const handleClick = app => () => {
        console.log(app)
    }

    return (
        <div>
            <HeaderLogo />
            <div className="apps-container d-flex flex-wrap justify-content-center">
                {apps.map(app => {
                    return <TeacherAppItemDesktop
                    name={app.title}
                    description={app.description} link={app.link}
                    onClick={handleClick(app)}
                    tool={app.tool}
                    tags={app.teacher_app_tags}/>
                })}
                {apps.length === 0 && <h1>Kein Treffer</h1>}
            </div>
        </div>
    )
}

export default TeacherApps
