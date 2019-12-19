import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeaderLogo from './HeaderLogo'
import TeacherAppItemDesktop from './ElectionApps/TeacherAppItemDesktop'
import { select } from 'glamor'

class TeacherApps extends Component {
    constructor(props) {
        super(props)

        this.state = { searchQuery: "", selectedGrades: [], selectedDevices: []}
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

        if (this.state.searchQuery === "" && this.state.selectedGrades.length === 0 && this.state.selectedDevices.length === 0 ){
            return apps
        }else{
            //Stufenfilter
            var appsFiltered = apps.filter(app => {
                console.log("selectedGrades: "+ this.state.selectedGrades) //Grundschule(3-4)
                console.log(app) //komplette Objekt
                console.log("grade_for: "+ app.for_oberstufe) //true

                return this.state.selectedGrades.every(selectedGrade => app[selectedGrade] === true)
                //return this.state.selectedGrades.every(element => grade.school_grade.includes(parseInt(element)))
            })
        }
        
            //Geraetefilter
            appsFiltered = appsFiltered.filter(app => {
                console.log("selectedGrades: "+ this.state.selectedDevices) //
                console.log(app) //komplette Objekt
                console.log("grade_for: "+ app.for_tablet) //

                return this.state.selectedDevices.every(selectedDevice => app[selectedDevice] === true)
            })
        

        // Wortfilter
        return appsFiltered.filter(app => {
            return app.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            || app.description.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            || app.teaser_text.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        })
    }

// Stufenfilter: Speichern der checked Stufen und entfernen der unchecked
    handelGradeChange = (e) => {
        console.log(e.target.checked);
        console.log(e.target.name);

        if(e.target.checked){
            this.setState({selectedGrades: [e.target.name, ...this.state.selectedGrades]})
        }else{
            this.setState({selectedGrades: this.state.selectedGrades.filter(grade => grade !== e.target.name)});
        }
    }

// Geraetefilter: Speichern der checked Geraet und entfernen der unchecked
handelDeviceChange = (e) => {
    console.log(e.target.checked);
    console.log(e.target.name);

    if(e.target.checked){
        this.setState({selectedDevices: [e.target.name, ...this.state.selectedDevices]})
    }else{
        this.setState({selectedDevices: this.state.selectedDevices.filter(device => device !== e.target.name)});
    }
}

    render () {
        const apps = this.filteredApps()
        const filterGrades = [{name: "for_grundschule", label: "Grundschule (3-4)"},
                              {name: "for_unterstufe", label: "Unterstufe (5-7)"}, 
                              {name: "for_mittelstufe", label: "Mittelstufe (8-9)"}, 
                              {name: "for_oberstufe", label: "Oberstufe (10-13)"}]

        const filterDevices = [{name: "for_smartphone", label: "Smartphone"},
                              {name: "for_tablet", label: "Tablet"}, 
                              {name: "for_desktop", label: "Computer"}, 
                              {name: "for_whiteboard", label: "Whiteboard"}]
        return (

            <div>
                <HeaderLogo />

                <div className="teacher-content">
                    <div className="teacher-heading">
                        <h1>Politik Apps &amp; Tools</h1>
                        <h4>Diese Apps und Angebote helfen Lehrern ihre Schüler rund um das Thema Wahlen in ihrem Politik-Unterricht zu informieren.  </h4>
                    </div>

                    {/* Hier wird das Suchfeld erstellt */}
                    <div>
                        <form>
                                <input className="search-form" name="search" placeholder="Suchbegriff eingeben" onChange={this.changeSearchString}/>
                        </form>
                    </div>

                  {/* Hier werden die controlled Componentes/Forms React (checkboxen) erstellt fuer die Klassenstufen */}
                  <div className="grade-container">
                    <form id = "klassen">
                      <div className="grade-container">
                        <h8>STUFE </h8>
                          {filterGrades.map(grade =>{
                            return <div key={grade.name} className="grades">
                              <input
                               className="grade-one"
                               type="checkbox"
                               name={grade.name}
                               onChange={this.handelGradeChange}
                               checked={this.state.selectedGrades.includes(grade.name)}
                               id={grade.name}/>
                              <label htmlFor={grade.label}>{grade.label}</label>
                            </div>
                          })}
                        </div>
                      </form>
                    </div>

                {/* Hier werden die controlled Componentes/Forms React (checkboxen) erstellt fuer die Geraete */}
                  <div className="grade-container">
                    <form id = "klassen">
                      <div className="grade-container">
                        <h8>GERÄTE </h8>
                          {filterDevices.map(tool =>{
                            return <div key={tool.name} className="tools">
                              <input
                               className="grade-one"
                               type="checkbox"
                               name={tool.name}
                               onChange={this.handelDeviceChange}
                               checked={this.state.selectedDevices.includes(tool.name)}
                               id={tool.name}/>
                              <label htmlFor={tool.label}>{tool.label}</label>
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
                            forDesktop={app.for_Desktop}
                            forTablet={app.for_Tablet}
                            forSmartphone={app.for_Smartphone}
                            forWhiteboard={app.for_Whiteboard}
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
