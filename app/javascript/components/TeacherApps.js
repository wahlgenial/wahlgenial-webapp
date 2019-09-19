import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderLogo from './HeaderLogo'
import TeacherAppItemDesktop from './ElectionApps/TeacherAppItemDesktop'

class TeacherApps extends Component {

    //Add tags to the apps 
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
            || app.tool.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        })
    }
    
    filterClasses = () => {
        var gradeBox = document.getElementById('grade');
        
        for(i = 0 ; i < 11 ; i++){
            if(gradeBox[i].checked){
                console.log("Das ist toll")
            }else{
            console.log("Das ist noch toller")
            }   
        }
 
        
    }

    render () {
        const apps = this.filteredApps()
        return (

            <div>
                <HeaderLogo />

                <div className="teacher-content">     
                    <div className="teacher-heading">
                        <h1>Webseiten und Apps <br/> für deinen Politik-Unterricht</h1>
                    </div>

                    <div>
                        <form>
                                <input className="search-form" name="search" placeholder="Suchbegriff eingeben" onChange={this.changeSearchString}/>    
                        </form>
                    </div>


                    <div className="grade">       
                        <form id = "klassen">
                            <div className="grade">
                                <h8>Stufe: </h8>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">3 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">4 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">5 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">6 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">7 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">8 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">9 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">10 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">11 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">12 </label>
                                <input className="grade-one" type="checkbox" id="grade"/><label for="1">13 </label>
                            </div>
                        </form>
                    </div>
                    


                    <div className="apps-container">
                        {apps.map(app => {
                            return <TeacherAppItemDesktop
                            name={app.title}
                            description={app.description} link={app.link}
                            teaserText={app.teaser_text} link={app.link}
                            tool={app.tool}
                            tags={this.tagHandler(app)}
                            onClick={this.handleClick(app)}/>
                        })}
                        {apps.length === 0 && <h8>Keine Treffer</h8>}
                    </div>
                </div>
            </div>
        )
    }
}
export default TeacherApps
