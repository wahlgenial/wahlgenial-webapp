import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderLogo from './HeaderLogo'
import TeacherAppItemDesktop from './ElectionApps/TeacherAppItemDesktop'

class TeacherApps extends Component {

    tagHandler = app => {
    console.log(app.teacher_app_tags)
      var teacherAppsTags = app.teacher_app_tags;
      var tagNameString = teacherAppsTags.map(function(val){
        return "#" + val.name
      }).join(", ")
      return tagNameString;
    }

    state = { searchQuery: "" }

    static propTypes = {
        apps: PropTypes.array.isRequired
    }

    changeSearchString = event => 
        this.setState({ searchQuery: event.target.value})        

    handleClick = app => () => console.log(app)

    // function handleClick (app) {
    //     return ()
    // }
    
    filterApps = e => {
        e.preventDefault()
        
        console.log(this.state.searchQuery)
    }

    filteredApps = () => {
        const { apps } = this.props
        console.log({apps}, this.state.searchQuery);
        
        if (this.state.searchQuery === "") {
            return apps
        }

        return apps.filter(app => {
            

            return app.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) 
            || app.description.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            || app.teaser_text.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        })
    }

    render () {
        const apps = this.filteredApps()

        return (
                <div>
                <div>
                    <HeaderLogo />
                </div>
                <div className="d-flex flex-wrap justify-content-center my-5">
                    <h1>Webseiten und Apps <br /> für deinen Politik-Unterricht</h1>
                </div>

                <div className="d-flex flex-wrap justify-content-center">
                    <form>
                        <input name="search" placeholder="Suchbegriff eingeben" className="search-form" onChange={this.changeSearchString}/>
                        <button onClick={this.filterApps}>Search</button>
                    </form>
                </div>
                <div className="apps-container d-flex flex-wrap justify-content-center">
                    {apps.map(app => {
                        return <TeacherAppItemDesktop
                        name={app.title}
                        description={app.description} link={app.link}
                        teaserText={app.teaser_text} link={app.link}
                        tool={app.tool}
                        tags={this.tagHandler(app)}
                        onClick={this.handleClick(app)}/>
                    })}
                    {apps.length === 0 && <h3>Keine Treffer</h3>}
                </div>
            </div>
        )
    }
// =======
// function TeacherApps({ apps }) {
//     function tagHandler (app){
//       var teacherAppsTags = app.teacher_app_tags;
//       var tagNameString = teacherAppsTags.map(function(val){
//         return "#" + val.name
//       }).join(", ")
//       return tagNameString;
//     }

//     const handleClick = app => () => {
//         console.log(apps)
//     }


//     return (
//         <div>
//           <div>
//             <HeaderLogo />
//           </div>
//           <div className="apps-container d-flex flex-wrap justify-content-center">
//               {apps.map(app => {
//                   return <TeacherAppItemDesktop
//                   name={app.title}
//                   teaserText={app.teaser_text}
//                   link={app.link}
//                   tool={app.tool}
//                   tags={tagHandler(app)}
//                   onClick={handleClick(app)}/>
//               })}
//               {apps.length === 0 && <h1>Kein Treffer</h1>}
//           </div>
//         </div>
//     )
// >>>>>>> 117cb07cdc1bc00a3d257523f5b46242ecfdb5a8
}
export default TeacherApps
