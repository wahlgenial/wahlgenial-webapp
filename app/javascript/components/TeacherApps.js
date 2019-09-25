import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderLogo from './HeaderLogo'
import TeacherAppItemDesktop from './ElectionApps/TeacherAppItemDesktop'
import { select } from 'glamor'

class TeacherApps extends Component {
    constructor(props) {
        super(props)

        this.state = { searchQuery: "", selectedGrades: []}
    }

    static propTypes = {
        apps: PropTypes.array.isRequired
    }

    //Add tags to the apps 
    tagHandler = app => {
      var teacherAppsTags = app.teacher_app_tags;
      var tagNameString = teacherAppsTags.map(function(val){
        return "#" + val.name
      }).join(", ")
      return tagNameString;
    }

    changeSearchString = event => 
        this.setState({ searchQuery: event.target.value})        

    handleClick = app => () => console.log(app)
    
    filterApps = e => {
        e.preventDefault()

        console.log(this.state.searchQuery)
    }

// Filter: Wortfilter zusammen mit Stufenfilter 
    filteredApps = () => {
        const { apps } = this.props

        if (this.state.searchQuery === "" && this.state.selectedGrades.length === 0){
            return apps 
        }else {
            //Stufenfilter
            var appsFiltered = apps.filter(grade => {
                return this.state.selectedGrades.every(element => grade.school_grade.includes(parseInt(element)))      
            })
        }

        // Wortfilter 
        return appsFiltered.filter(app => {
            return app.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) 
            || app.description.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            || app.teaser_text.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            || app.tool.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        })
    }
 
// Stufenfilter: Speichern der checked Stufen und entfernen der unchecked
    handelGradeChange = (e) => {
        console.log(e.target.checked);
        console.log(e.target.name);

        if(e.target.checked){
            this.setState({selectedGrades: [e.target.name, ...this.state.selectedGrades]})         
        }else{
            this.setState({selectedGrades: this.state.selectedGrades.filter(grade => grade !== e.target.name)})  
        }
    }

    render () {
        const apps = this.filteredApps()
        console.log(this.state.selectedGrades);
        return (

            <div>
                <HeaderLogo />

                <div className="teacher-content">     
                    <div className="teacher-heading">
                        <h1>Webseiten und Apps <br/> für deinen Politik-Unterricht</h1>
                    </div>
 
                    {/* Hier wird das Suchfeld erstellt */}
                    <div>
                        <form>
                                <input className="search-form" name="search" placeholder="Suchbegriff eingeben" onChange={this.changeSearchString}/>    
                        </form>
                    </div>

                    {/* Hier werden die controlled Componentes/Forms React (checkboxen) erstellt */}
                    <div className="grade">       
                        <form id = "klassen">
                            <div className="grade">
                                <h8>Stufe: </h8>
                                {["3","4","5","6","7","8","9","10","11","12","13"].map(grade =>{
                                   return <div key={grade}><input className="grade-one" type="checkbox" name={grade} onChange={this.handelGradeChange} checked={this.state.selectedGrades.includes(grade)} id={grade}/>
                                                           <label htmlFor={grade}>{grade}</label>
                                          </div>
                                })}                          
                            </div>
                        </form>
                    </div>       

                    {/*  Hier wird die Appanzeige zusammengebaut */}
                    <div className="apps-container ">
                        {apps.map(app => {
                            return <TeacherAppItemDesktop
                            key ={app.id}
                            name={app.title}
                            description={app.description} link={app.link}
                            teaserText={app.teaser_text} link={app.link}
                            tool={app.tool}
                            tags={this.tagHandler(app)}
                            slug={app.slug}/>
                        })}
                        {apps.length === 0 && <h8>Keine Treffer</h8>}
                    </div>
                </div>
            </div>
        )
    }
}

export default TeacherApps
